import "./globals.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ja">
            <body className="antialiased bg-img">{children}</body>
        </html>
    );
}
