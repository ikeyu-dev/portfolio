import { useEffect, useState } from "react";
import Link from "next/link";

async function getConnpassEvents<ConnpassEvents>(
    username: string
): Promise<ConnpassEvents> {
    const response = await fetch(`/api/connpass?username=${username}`);
    if (!response.ok) {
        throw new Error("Failed to fetch Connpass events");
    }
    const data = await response.json();
    return data as ConnpassEvents;
}

interface ConnpassEvent {
    results_returned: number;
    results_available: number;
    results_start: number;
    events: {
        id: number;
        title: string;
        catch: string | null;
        description: string | null;
        url: string;
        image_url: string | null;
        hash_tag: string | null;
        started_at: string | null;
        ended_at: string | null;
        limit: number | null;
        event_type: string;
        open_status: string;
        group: object | null;
        address: string | null;
        place: string | null;
        lat: number | string | null;
        lon: number | string | null;
        owner_id: number | null;
        owner_nickname: string;
        owner_display_name: string;
        accepted: number;
        waiting: number;
        updated_at: string;
    }[];
}

export const Connpass = () => {
    const [conpassEvent, setConnpassEvent] = useState<ConnpassEvent | null>(
        null
    );

    useEffect(() => {
        const fetchConnpassEvents = async () => {
            try {
                const events = await getConnpassEvents<ConnpassEvent>(
                    "uyuyu_dev"
                );

                setConnpassEvent(events);
            } catch (error) {
                console.error("Error fetching Connpass events:", error);
            }
        };

        fetchConnpassEvents();
    }, []);

    return (
        <section className="bg-base-100 rounded-box w-11/12 m-20">
            <ul className="list bg-base-100 rounded-box shadow-md pb-10 md:pb-12 md:p-2">
                <li className="p-4 pb-2 text-xs tracking-wide flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 88.3 88.3"
                        style={{ background: "new 0 0 88.3 88.3" }}
                        xmlSpace="preserve"
                        className="h-5 w-5 fill-current transition-all duration-300 mr-2"
                    >
                        <g fill="#3EA8FF">
                            <path
                                className="st0"
                                d="M3.9,83.3h17c0.9,0,1.7-0.5,2.2-1.2L69.9,5.2c0.6-1-0.1-2.2-1.3-2.2H52.5c-0.8,0-1.5,0.4-1.9,1.1L3.1,81.9   C2.8,82.5,3.2,83.3,3.9,83.3z"
                            />
                            <path
                                className="st0"
                                d="M62.5,82.1l22.1-35.5c0.7-1.1-0.1-2.5-1.4-2.5h-16c-0.6,0-1.2,0.3-1.5,0.8L43,81.2c-0.6,0.9,0.1,2.1,1.2,2.1   h16.3C61.3,83.3,62.1,82.9,62.5,82.1z"
                            />
                        </g>
                    </svg>
                    <span>参加イベント</span>
                </li>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {conpassEvent?.events.map((event) => (
                        <div key={event.id}>
                            <figure className="p-5">
                                <img
                                    src={event.image_url || ""}
                                    alt="image"
                                    className="rounded-xl object-cover w-full h-48"
                                />
                            </figure>
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
                                        {/* 主催(リンクあり) */}
                                        主催:
                                        <Link
                                            href={`https://connpass.com/user/${event.owner_nickname}/`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="ml-1"
                                        >
                                            {event.owner_display_name}
                                        </Link>{" "}
                                        様
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
