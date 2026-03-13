"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Event } from "@/types/event";

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
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {events.map((event) => (
                        <div key={event.id}>
                            <Link
                                href={event.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <figure className="p-5">
                                    <img
                                        src={event.image_url || ""}
                                        alt="image"
                                        className="rounded-xl object-cover w-full h-48 hover:scale-105 transition-transform duration-300"
                                    />
                                </figure>
                            </Link>
                            <div className="card-body items-center text-center p-0">
                                <h2
                                    className={`card-title object-cover w-full justify-center h-10 ${
                                        event.title.length > 20
                                            ? "text-sm"
                                            : "text-md"
                                    }`}
                                >
                                    {event.title}
                                </h2>
                                <div className="grid grid-cols-2 gap-2">
                                    <p className="whitespace-nowrap">
                                        主催:
                                        {event.organizer_url ? (
                                            <Link
                                                href={event.organizer_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="ml-1"
                                            >
                                                {event.organizer_name}
                                            </Link>
                                        ) : (
                                            <span className="ml-1">
                                                {event.organizer_name}
                                            </span>
                                        )}
                                    </p>
                                    <p>
                                        開催日時:{" "}
                                        {event.started_at
                                            ? new Date(
                                                  event.started_at
                                              ).toLocaleString("ja-JP", {
                                                  year: "numeric",
                                                  month: "2-digit",
                                                  day: "2-digit",
                                              })
                                            : "未定"}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </ul>
        </section>
    );
};
