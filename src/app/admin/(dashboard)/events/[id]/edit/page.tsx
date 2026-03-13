import { notFound } from "next/navigation";
import { getEventById } from "@/lib/events";
import { EditEventForm } from "./edit-event-form";

/**
 * 管理画面イベント編集ページ
 */
export default async function AdminEventEditPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const event = await getEventById(id);

    if (!event) {
        notFound();
    }

    return <EditEventForm event={event} />;
}
