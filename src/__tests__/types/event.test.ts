import { describe, expect, it } from "vitest";
import type { Event } from "@/types/event";

describe("Event型定義", () => {
    it("Eventオブジェクトが正しい構造を持つこと", () => {
        const event: Event = {
            id: "550e8400-e29b-41d4-a716-446655440000",
            title: "テストイベント",
            url: "https://example.com/event/1",
            started_at: "2026-03-15T10:00:00+09:00",
            ended_at: "2026-03-16T18:00:00+09:00",
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
        };
        expect(event.started_at).toBeNull();
        expect(event.ended_at).toBeNull();
    });

    it("connpass由来のイベントIDを文字列として扱えること", () => {
        const event: Event = {
            id: "12345",
            title: "connpassイベント",
            url: "https://connpass.com/event/12345/",
            started_at: "2026-03-20T10:00:00+09:00",
            ended_at: null,
        };

        expect(event.id).toBe("12345");
        expect(event.url).toContain("connpass.com");
    });
});
