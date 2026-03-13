import { logout } from "@/app/admin/login/actions";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <header className="bg-gradient-gray flex justify-end items-center transition-colors duration-300 p-4 pb-10 sticky top-0 z-10">
                <form action={logout}>
                    <button
                        type="submit"
                        className="btn btn-link btn-sm text-gray-300 no-underline"
                    >
                        ログアウト
                    </button>
                </form>
            </header>
            <div className="container mx-auto px-4 py-8 max-w-4xl">
                {children}
            </div>
        </>
    );
}
