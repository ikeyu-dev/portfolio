// src/app/layout.tsx
// "use client";

// import { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";
import "./globals.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // const pathname = usePathname();
    // const [title, setTitle] = useState("");

    // useEffect(() => {
    //     if (pathname === "/") {
    //         setTitle("Ikeyu's Portfolio");
    //     } else {
    //         setTitle(pathname.split("/")[1].replaceAll("_", " "));
    //     }
    // }, [pathname]);

    return (
        <html lang="ja">
            <body className="antialiased">{children}</body>
        </html>
    );
}
