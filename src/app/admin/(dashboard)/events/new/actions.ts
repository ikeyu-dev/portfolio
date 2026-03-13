"use server";

import { redirect } from "next/navigation";
import { createEvent } from "@/lib/events";
import type { CreateEventInput, EventSource } from "@/types/event";

/**
 * フォームデータからイベントを作成し、一覧ページへリダイレクトする
 */
export async function createEventAction(formData: FormData) {
    const input: CreateEventInput = {
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
        await createEvent(input);
    } catch (error) {
        return {
            error:
                error instanceof Error
                    ? error.message
                    : "作成に失敗しました",
        };
    }

    redirect("/admin/events");
}
