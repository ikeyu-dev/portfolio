"use server";

import { redirect } from "next/navigation";
import { updateEvent } from "@/lib/events";
import type { UpdateEventInput } from "@/types/event";

/**
 * フォームデータからイベントを更新し、一覧ページへリダイレクトする
 */
export async function updateEventAction(id: string, formData: FormData) {
    const input: UpdateEventInput = {
        title: formData.get("title") as string,
        url: formData.get("url") as string,
        started_at: (formData.get("started_at") as string) || null,
        ended_at: (formData.get("ended_at") as string) || null,
    };

    try {
        await updateEvent(id, input);
    } catch (error) {
        return {
            error:
                error instanceof Error ? error.message : "更新に失敗しました",
        };
    }

    redirect("/admin/events");
}
