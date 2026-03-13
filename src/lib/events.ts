import { createClient } from "@/lib/supabase/server";
import type { Event, CreateEventInput, UpdateEventInput } from "@/types/event";

/**
 * イベント一覧をstarted_at降順で取得する
 */
export async function getEvents(): Promise<Event[]> {
    const supabase = await createClient();
    const { data, error } = await supabase
        .from("events")
        .select("*")
        .order("started_at", { ascending: false });

    if (error) {
        throw new Error(error.message);
    }

    return data as Event[];
}

/**
 * 指定IDのイベントを取得する
 */
export async function getEventById(id: string): Promise<Event | null> {
    const supabase = await createClient();
    const { data, error } = await supabase
        .from("events")
        .select("*")
        .eq("id", id)
        .single();

    if (error) {
        throw new Error(error.message);
    }

    return data as Event;
}

/**
 * イベントを作成する
 */
export async function createEvent(input: CreateEventInput): Promise<Event> {
    const supabase = await createClient();
    const { data, error } = await supabase
        .from("events")
        .insert(input)
        .select()
        .single();

    if (error) {
        throw new Error(error.message);
    }

    return data as Event;
}

/**
 * イベントを更新する
 */
export async function updateEvent(
    id: string,
    input: UpdateEventInput
): Promise<Event> {
    const supabase = await createClient();
    const { data, error } = await supabase
        .from("events")
        .update(input)
        .eq("id", id)
        .select()
        .single();

    if (error) {
        throw new Error(error.message);
    }

    return data as Event;
}

/**
 * イベントを削除する
 */
export async function deleteEvent(id: string): Promise<void> {
    const supabase = await createClient();
    const { error } = await supabase.from("events").delete().eq("id", id);

    if (error) {
        throw new Error(error.message);
    }
}
