"use server";

import { redirect } from "next/navigation";
import { updateEvent } from "@/lib/events";
import type { UpdateEventInput, EventSource } from "@/types/event";

/**
 * フォームデータからイベントを更新し、一覧ページへリダイレクトする
 */
export async function updateEventAction(id: string, formData: FormData) {
    const input: UpdateEventInput = {
        title: formData.get("title") as string,
        url: formData.get("url") as string,
        image_url: (formData.get("image_url") as string) || null,
        started_at: (formData.get("started_at") as string) || null,
        organizer_name: formData.get("organizer_name") as string,
        organizer_url: (formData.get("organizer_url") as string) || null,
        source: (formData.get("source") as EventSource) || "other",
        source_event_id:
            (formData.get("source_event_id") as string) || null,
    };

    try {
        await updateEvent(id, input);
    } catch (error) {
        return {
            error:
                error instanceof Error
                    ? error.message
                    : "更新に失敗しました",
        };
    }

    redirect("/admin/events");
}
