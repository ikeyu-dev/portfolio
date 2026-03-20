"use server";

import { redirect } from "next/navigation";
import { createEvent } from "@/lib/events";
import type { CreateEventInput } from "@/types/event";

/**
 * フォームデータからイベントを作成し、一覧ページへリダイレクトする
 */
export async function createEventAction(formData: FormData) {
    const input: CreateEventInput = {
        title: formData.get("title") as string,
        url: formData.get("url") as string,
        started_at: (formData.get("started_at") as string) || null,
        ended_at: (formData.get("ended_at") as string) || null,
    };

    try {
        await createEvent(input);
    } catch (error) {
        return {
            error:
                error instanceof Error ? error.message : "作成に失敗しました",
        };
    }

    redirect("/admin/events");
}
