import { describe, expect, it } from "vitest";
import type { CreateEventInput, Event, UpdateEventInput } from "@/types/event";

describe("Event型定義", () => {
    it("Eventオブジェクトが正しい構造を持つこと", () => {
        const event: Event = {
            id: "550e8400-e29b-41d4-a716-446655440000",
            title: "テストイベント",
            url: "https://example.com/event/1",
            started_at: "2026-03-15T10:00:00+09:00",
            ended_at: "2026-03-16T18:00:00+09:00",
            created_at: "2026-03-13T00:00:00+09:00",
            updated_at: "2026-03-13T00:00:00+09:00",
        };
        expect(event.id).toBeDefined();
        expect(event.title).toBe("テストイベント");
        expect(event.ended_at).toBe("2026-03-16T18:00:00+09:00");
    });

    it("started_atとended_atがnullを許容すること", () => {
        const event: Event = {
            id: "550e8400-e29b-41d4-a716-446655440000",
            title: "日時未定イベント",
            url: "https://example.com/event/2",
            started_at: null,
            ended_at: null,
            created_at: "2026-03-13T00:00:00+09:00",
            updated_at: "2026-03-13T00:00:00+09:00",
        };
        expect(event.started_at).toBeNull();
        expect(event.ended_at).toBeNull();
    });

    it("CreateEventInputにid, created_at, updated_atが含まれないこと", () => {
        const input: CreateEventInput = {
            title: "新規イベント",
            url: "https://example.com/event/new",
            started_at: null,
            ended_at: null,
        };
        expect(input).not.toHaveProperty("id");
        expect(input).not.toHaveProperty("created_at");
        expect(input).not.toHaveProperty("updated_at");
    });

    it("UpdateEventInputが部分更新を許容すること", () => {
        const input: UpdateEventInput = {
            title: "更新後タイトル",
        };
        expect(input.title).toBe("更新後タイトル");
        expect(input.url).toBeUndefined();
    });
});
