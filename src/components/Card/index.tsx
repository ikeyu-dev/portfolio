import Image from "next/image";
import type { CSSProperties } from "react";
import { useRef } from "react";

const socials = [
    {
        label: "ikeyu_dev",
        href: "https://x.com/ikeyu_dev",
        iconSrc: "https://cdn.simpleicons.org/x/FFFFFF",
        iconBg: "bg-zinc-900",
    },
    {
        label: "ikeyu-dev",
        href: "https://github.com/ikeyu-dev",
        iconSrc: "https://cdn.simpleicons.org/github/FFFFFF",
        iconBg: "bg-gray-800",
    },
];

const techSections = [
    {
        label: "main",
        items: [
            {
                label: "TypeScript",
                href: "https://www.typescriptlang.org/",
                iconSrc: "https://cdn.simpleicons.org/typescript/3178C6",
                iconBg: "bg-white",
            },
            {
                label: "React",
                href: "https://react.dev/",
                iconSrc: "https://cdn.simpleicons.org/react/61DAFB",
                iconBg: "bg-slate-950",
            },
            {
                label: "Next.js",
                href: "https://nextjs.org/",
                iconSrc: "https://cdn.simpleicons.org/nextdotjs/FFFFFF",
                iconBg: "",
                iconBgColor: "#000000",
                chipClassName: "bg-black/60",
            },
            {
                label: "Tailwind CSS",
                href: "https://tailwindcss.com/",
                iconSrc: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
                iconBg: "bg-white",
            },
        ],
    },
    {
        label: "also",
        items: [
            {
                label: "Vue",
                href: "https://vuejs.org/",
                iconSrc: "https://cdn.simpleicons.org/vuedotjs/4FC08D",
                iconBg: "bg-white",
            },
            {
                label: "Nuxt",
                href: "https://nuxt.com/",
                iconSrc: "https://nuxt.com/assets/design-kit/icon-green.svg",
                iconBg: "",
                iconBgColor: "#020617",
                chipClassName: "bg-black/60",
            },
            {
                label: "Python",
                href: "https://www.python.org/",
                iconSrc: "https://cdn.simpleicons.org/python/3776AB",
                iconBg: "bg-white",
            },
            {
                label: "FastAPI",
                href: "https://fastapi.tiangolo.com/ja/",
                iconSrc: "https://cdn.simpleicons.org/fastapi/009688",
                iconBg: "bg-white",
            },
        ],
    },
    {
        label: "language",
        items: [
            {
                label: "JavaScript",
                href: "https://developer.mozilla.org/docs/Web/JavaScript",
                iconSrc: "https://cdn.simpleicons.org/javascript/F7DF1E",
                iconBg: "bg-zinc-900",
            },
            {
                label: "HTML",
                href: "https://developer.mozilla.org/docs/Web/HTML",
                iconSrc: "https://cdn.simpleicons.org/html5/E34F26",
                iconBg: "bg-white",
            },
            {
                label: "CSS",
                href: "https://developer.mozilla.org/docs/Web/CSS",
                iconSrc: "https://cdn.simpleicons.org/css/663399",
                iconBg: "bg-white",
            },
            {
                label: "Go",
                href: "https://go.dev/",
                iconSrc: "https://cdn.simpleicons.org/go/00ADD8",
                iconBg: "bg-white",
            },
            {
                label: "C",
                href: "https://en.cppreference.com/w/c/language",
                iconSrc: "https://cdn.simpleicons.org/c/A8B9CC",
                iconBg: "bg-white",
            },
        ],
    },
];

function BadgeLink({
    href,
    iconSrc,
    iconBg,
    iconBgColor,
    chipClassName = "bg-black/25",
    label,
}: {
    href: string;
    iconSrc: string;
    iconBg: string;
    iconBgColor?: CSSProperties["backgroundColor"];
    chipClassName?: string;
    label: string;
}) {
    return (
        <a
            target="_blank"
            href={href}
            className={`inline-flex max-w-full items-center gap-1.5 rounded-md px-1.5 py-1 text-[11px] font-bold leading-none text-gray-200 transition-colors duration-100 hover:bg-white/15 md:gap-2 md:px-2 md:text-xs ${chipClassName}`}
            rel="noopener noreferrer"
            aria-label={label}
        >
            <span
                className={`flex h-4 w-4 shrink-0 items-center justify-center rounded p-0.5 md:h-5 md:w-5 ${iconBg}`}
                style={{ backgroundColor: iconBgColor }}
            >
                <span
                    className="h-full w-full bg-contain bg-center bg-no-repeat"
                    style={{ backgroundImage: `url("${iconSrc}")` }}
                    aria-hidden="true"
                />
            </span>
            <span className="min-w-0 truncate">{label}</span>
        </a>
    );
}

function ProfileDetails() {
    return (
        <div className="mb-4">
            <h2 className="py-2 text-xl text-gray-200 sm:whitespace-nowrap md:text-2xl lg:text-3xl">
                いけゆう / 池田 悠真
            </h2>
            <div className="space-y-3 text-xs leading-relaxed text-gray-200 lg:text-base">
                <p>日本工業大学先進工学部データサイエンス学科</p>
                <p>特定非営利活動法人NxTEND　関東事業部</p>
            </div>
        </div>
    );
}

function ProfileLinks() {
    return (
        <div className="space-y-2.5 text-gray-200">
            <div className="min-w-0">
                <p className="mb-1.5 text-sm text-gray-200 transition-all duration-300 md:text-xl">
                    SNS
                </p>
                <div className="flex flex-wrap gap-1.5">
                    {socials.map((social) => (
                        <BadgeLink
                            key={social.href}
                            {...social}
                        />
                    ))}
                </div>
            </div>
            {techSections.map((section) => (
                <div
                    key={section.label}
                    className="min-w-0"
                >
                    <p className="mb-1.5 text-sm text-gray-200 transition-all duration-300 md:text-xl">
                        {section.label}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                        {section.items.map((item) => (
                            <BadgeLink
                                key={item.href}
                                {...item}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export const Card = () => {
    const modalRef = useRef<HTMLDialogElement>(null);

    const openModal = () => {
        modalRef.current?.showModal();
    };

    return (
        <div>
            <div
                className="hover-3d"
                onClick={() => openModal()}
            >
                <div className="card card-body rounded-2xl grid grid-cols-9 md:grid-cols-12 items-center">
                    <div className="col-span-4 md:flex justify-center hidden">
                        <Image
                            width={150}
                            height={150}
                            className="rounded-full shadow-lg"
                            src="https://lh3.googleusercontent.com/a/ACg8ocJyKmN00v0EKYBId9b_gms6XRo-YnT7ZbgZVYPma5cNTPhMnjo=s576-c-no"
                            alt="ikeyu's-icon"
                        />
                    </div>
                    <div className="col-span-9 md:col-span-8 md:pl-4">
                        <ProfileDetails />
                        <ProfileLinks />
                    </div>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            {/* modal(名刺的な?) */}
            <dialog
                className="modal"
                id="modal-card"
                ref={modalRef}
            >
                <div className="modal-card-bg modal-box lg:min-w-7/12 card card-body rounded-2xl md:grid md:grid-cols-12 items-center">
                    <div className="md:col-span-4 md:flex justify-center md:right-0">
                        <Image
                            width={150}
                            height={150}
                            className="rounded-full shadow-lg"
                            src="https://lh3.googleusercontent.com/a/ACg8ocJyKmN00v0EKYBId9b_gms6XRo-YnT7ZbgZVYPma5cNTPhMnjo=s576-c-no"
                            alt="ikeyu's-icon"
                            priority
                        />
                    </div>
                    <div className="md:col-span-8 md:pl-4">
                        <ProfileDetails />
                        <ProfileLinks />
                    </div>
                </div>
                <form
                    method="dialog"
                    className="modal-backdrop"
                >
                    <button
                        type="submit"
                        aria-label="Close modal"
                    ></button>
                </form>
            </dialog>
        </div>
    );
};
