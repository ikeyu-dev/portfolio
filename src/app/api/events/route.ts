import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

/**
 * 公開用イベント一覧を取得するAPI Route
 * @returns イベント一覧（開催日の降順）
 */
export async function GET() {
    const supabase = await createClient();
    const { data, error } = await supabase
        .from("events")
        .select("*")
        .order("started_at", { ascending: false });

    if (error) {
        return NextResponse.json(
            { error: "イベントの取得に失敗しました" },
            { status: 500 }
        );
    }

    return NextResponse.json(data);
}
