// src/app/layout.tsx
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "./globals.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [title, setTitle] = useState("");

    useEffect(() => {
        if (pathname === "/") {
            setTitle("Ikeyu's Portfolio");
        } else {
            setTitle(pathname.split("/")[1].replaceAll("_", " "));
        }
    }, [pathname]);

    return (
        <html lang="ja">
            <body className="antialiased">
                <header className="bg-gradient-gray flex justify-between items-center transition-colors duration-300 p-4 sticky top-0 z-10">
                    <div className="flex items-center">
                        <span className="text-lg font-bold text-gray-200 transition-colors duration-300">
                            {title}
                        </span>
                    </div>
                </header>
                {children}
            </body>
        </html>
    );
}
