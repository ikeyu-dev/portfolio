/** イベントソースの種別 */
export type EventSource = "connpass" | "doorkeeper" | "other";

/** eventsテーブルの行に対応する型 */
export interface Event {
    id: string;
    title: string;
    url: string;
    image_url: string | null;
    started_at: string | null;
    organizer_name: string;
    organizer_url: string | null;
    source: EventSource;
    source_event_id: string | null;
    created_at: string;
    updated_at: string;
}

/** イベント作成時の入力型 */
export type CreateEventInput = Omit<Event, "id" | "created_at" | "updated_at">;

/** イベント更新時の入力型 */
export type UpdateEventInput = Partial<CreateEventInput>;
