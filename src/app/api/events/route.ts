import { NextResponse } from "next/server";

interface ConnpassAttendedEventsResponse {
    events: ConnpassEvent[];
}

interface ConnpassEvent {
    id: number;
    title: string;
    url: string;
    started_at: string | null;
    ended_at: string | null;
}

function toEvent(event: ConnpassEvent) {
    return {
        id: String(event.id),
        title: event.title,
        url: event.url,
        started_at: event.started_at,
        ended_at: event.ended_at,
    };
}

/**
 * connpassの参加イベント一覧を取得するAPI Route
 * @returns 画像情報を含まないイベント一覧（開催日の降順）
 */
export async function GET() {
    const username = process.env.CONNPASS_USERNAME ?? "uyuyu_dev";
    const apiKey = process.env.CONNPASS_API_KEY;

    if (!apiKey) {
        console.warn("CONNPASS_API_KEY is not configured");
        return NextResponse.json([]);
    }

    try {
        const response = await fetch(
            `https://connpass.com/api/v2/users/${username}/attended_events/`,
            {
                headers: {
                    "X-API-Key": apiKey,
                },
                next: {
                    revalidate: 60 * 60,
                },
            }
        );

        if (!response.ok) {
            return NextResponse.json(
                { error: "イベントの取得に失敗しました" },
                { status: response.status }
            );
        }

        const data = (await response.json()) as ConnpassAttendedEventsResponse;
        const events = data.events.map(toEvent).sort((a, b) => {
            const aTime = a.started_at ? new Date(a.started_at).getTime() : 0;
            const bTime = b.started_at ? new Date(b.started_at).getTime() : 0;
            return bTime - aTime;
        });

        return NextResponse.json(events);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "イベントの取得に失敗しました" },
            { status: 500 }
        );
    }
}
