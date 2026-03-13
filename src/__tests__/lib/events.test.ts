import { describe, it, expect, vi, beforeEach } from "vitest";
import type { Event, CreateEventInput } from "@/types/event";

// Supabaseクライアントのモック
const mockSelect = vi.fn();
const mockInsert = vi.fn();
const mockUpdate = vi.fn();
const mockDelete = vi.fn();
const mockEq = vi.fn();
const mockOrder = vi.fn();
const mockSingle = vi.fn();

const mockFrom = vi.fn(() => ({
    select: mockSelect,
    insert: mockInsert,
    update: mockUpdate,
    delete: mockDelete,
}));

vi.mock("@/lib/supabase/server", () => ({
    createClient: vi.fn(() =>
        Promise.resolve({
            from: mockFrom,
        })
    ),
}));

// テスト対象をモック設定後にインポート
const { getEvents, getEventById, createEvent, updateEvent, deleteEvent } =
    await import("@/lib/events");

const mockEvent: Event = {
    id: "550e8400-e29b-41d4-a716-446655440000",
    title: "テストイベント",
    url: "https://example.com/event/1",
    image_url: "https://example.com/image.png",
    started_at: "2026-03-15T10:00:00+09:00",
    organizer_name: "テスト主催者",
    organizer_url: "https://example.com/organizer",
    source: "connpass",
    source_event_id: "12345",
    created_at: "2026-03-13T00:00:00+09:00",
    updated_at: "2026-03-13T00:00:00+09:00",
};

describe("イベントデータアクセス層", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    describe("getEvents", () => {
        it("イベント一覧をstarted_at降順で取得すること", async () => {
            mockSelect.mockReturnValue({
                order: mockOrder,
            });
            mockOrder.mockResolvedValue({
                data: [mockEvent],
                error: null,
            });

            const result = await getEvents();

            expect(mockFrom).toHaveBeenCalledWith("events");
            expect(mockSelect).toHaveBeenCalledWith("*");
            expect(mockOrder).toHaveBeenCalledWith("started_at", {
                ascending: false,
            });
            expect(result).toEqual([mockEvent]);
        });

        it("エラー時に例外を投げること", async () => {
            mockSelect.mockReturnValue({
                order: mockOrder,
            });
            mockOrder.mockResolvedValue({
                data: null,
                error: { message: "取得失敗" },
            });

            await expect(getEvents()).rejects.toThrow("取得失敗");
        });
    });

    describe("getEventById", () => {
        it("指定IDのイベントを取得すること", async () => {
            mockSelect.mockReturnValue({
                eq: mockEq,
            });
            mockEq.mockReturnValue({
                single: mockSingle,
            });
            mockSingle.mockResolvedValue({
                data: mockEvent,
                error: null,
            });

            const result = await getEventById(mockEvent.id);

            expect(mockFrom).toHaveBeenCalledWith("events");
            expect(mockEq).toHaveBeenCalledWith("id", mockEvent.id);
            expect(result).toEqual(mockEvent);
        });
    });

    describe("createEvent", () => {
        it("イベントを作成して返すこと", async () => {
            const input: CreateEventInput = {
                title: "新規イベント",
                url: "https://example.com/event/new",
                image_url: null,
                started_at: null,
                organizer_name: "主催者",
                organizer_url: null,
                source: "other",
                source_event_id: null,
            };

            mockInsert.mockReturnValue({
                select: vi.fn().mockReturnValue({
                    single: mockSingle,
                }),
            });
            mockSingle.mockResolvedValue({
                data: { ...mockEvent, ...input },
                error: null,
            });

            const result = await createEvent(input);

            expect(mockFrom).toHaveBeenCalledWith("events");
            expect(mockInsert).toHaveBeenCalledWith(input);
            expect(result.title).toBe("新規イベント");
        });
    });

    describe("updateEvent", () => {
        it("イベントを更新して返すこと", async () => {
            const updateInput = { title: "更新後タイトル" };

            mockUpdate.mockReturnValue({
                eq: vi.fn().mockReturnValue({
                    select: vi.fn().mockReturnValue({
                        single: mockSingle,
                    }),
                }),
            });
            mockSingle.mockResolvedValue({
                data: { ...mockEvent, ...updateInput },
                error: null,
            });

            const result = await updateEvent(mockEvent.id, updateInput);

            expect(mockFrom).toHaveBeenCalledWith("events");
            expect(mockUpdate).toHaveBeenCalledWith(updateInput);
            expect(result.title).toBe("更新後タイトル");
        });
    });

    describe("deleteEvent", () => {
        it("イベントを削除すること", async () => {
            mockDelete.mockReturnValue({
                eq: mockEq,
            });
            mockEq.mockResolvedValue({
                error: null,
            });

            await deleteEvent(mockEvent.id);

            expect(mockFrom).toHaveBeenCalledWith("events");
            expect(mockEq).toHaveBeenCalledWith("id", mockEvent.id);
        });
    });
});
