"use server";

import { revalidatePath } from "next/cache";
import { deleteEvent } from "@/lib/events";

/**
 * 指定IDのイベントを削除し、一覧ページを再描画する
 */
export async function deleteEventAction(id: string): Promise<void> {
    await deleteEvent(id);
    revalidatePath("/admin/events");
}
