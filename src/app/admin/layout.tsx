export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div className="bg-img min-h-screen">{children}</div>;
}
