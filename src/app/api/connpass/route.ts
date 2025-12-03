import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get("username");

    if (!username) {
        return NextResponse.json(
            { error: "Username is required" },
            { status: 400 }
        );
    }

    try {
        const response = await fetch(
            `https://connpass.com/api/v2/users/${username}/attended_events/`,
            {
                headers: {
                    "X-API-Key":
                        "TGMeioy7.KivNWOZ1YM66ffuo2UWgRafyZQxZVd3ZySGQZh0SvtES288I8RBod9P8",
                },
            }
        );

        if (!response.ok) {
            throw new Error("Failed to fetch Connpass attended events");
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Failed to fetch events" },
            { status: 500 }
        );
    }
}
