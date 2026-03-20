"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Event } from "@/types/event";

/**
 * 日付の表示文字列を生成する
 */
function formatDateRange(startedAt: string | null, endedAt: string | null) {
    const opts: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    };

    if (!startedAt) return "日時未定";

    const start = new Date(startedAt).toLocaleDateString("ja-JP", opts);
    if (!endedAt) return start;

    const end = new Date(endedAt).toLocaleDateString("ja-JP", opts);
    if (start === end) return start;

    return `${start} - ${end}`;
}

/**
 * Supabaseからイベント一覧を取得して表示するコンポーネント
 */
export const Events = () => {
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch("/api/events");
                if (!response.ok) {
                    throw new Error("Failed to fetch events");
                }
                const data: Event[] = await response.json();
                setEvents(data);
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        };

        fetchEvents();
    }, []);

    return (
        <section className="bg-base-100 rounded-box w-11/12 m-20">
            <ul className="list bg-base-100 rounded-box shadow-md pb-10 md:pb-12 md:p-2">
                <li className="p-4 pb-2 text-xs tracking-wide flex items-center">
                    <span>参加イベント</span>
                </li>
                {events.map((event) => (
                    <li
                        key={event.id}
                        className="list-row"
                    >
                        <div className="list-col-grow">
                            <Link
                                href={event.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link link-hover font-medium"
                            >
                                {event.title}
                            </Link>
                            <p className="text-xs text-base-content/60">
                                {formatDateRange(
                                    event.started_at,
                                    event.ended_at
                                )}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};
