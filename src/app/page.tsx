"use client";

import { useEffect, FC } from "react";

import { Card } from "@/components/Card";
import { Zenn } from "@/components/Zenn";

export default function Home() {
    useEffect(() => {
        document.title = "Ikeyu's Portfolio";
    }, []);

    return (
        <div className="bg-img h-full">
            <header className="bg-gradient-gray flex justify-between items-center transition-colors duration-300 p-4 pb-10 sticky top-0 z-10">
                <div className="flex items-center">
                    <span className="text-lg font-bold text-gray-200 transition-colors duration-300">
                        Ikeyu's Portfolio
                    </span>
                </div>
            </header>
            <div style={{ minHeight: "calc(100svh - 60px)" }}>
                <div className="flex flex-col items-center">
                    <div className="place-items-center pb-20 pt-8 w-full md:w-9/12 px-4">
                        <div className="w-full md:w-60 flex justify-center">
                            <div>
                                <Card />
                            </div>
                        </div>
                    </div>
                    <Zenn />
                </div>
            </div>
        </div>
    );
}
