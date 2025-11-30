// /Users/uyuyu/02.code/portfolio/src/app/@zenn/page.tsx
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
async function getZennArticles<zenn_response>(
    username: string
): Promise<zenn_response> {
    const response = await fetch(`/api/zenn-articles?username=${username}`);
    if (!response.ok) {
        throw new Error("Failed to fetch Zenn articles");
    }
    const data = await response.json();
    return data as zenn_response;
}

interface ZennArticle {
    id: number;
    post_type: string;
    title: string;
    slug: string;
    comments_count: number;
    liked_count: number;
    body_letters_count: number;
    article_type: string;
    emoji: string;
    is_suspending_private: boolean;
    published_at: string;
    body_updated_at: string;
    source_repo_updated_at: string | null;
    pinned: boolean;
    path: string;
    user: {
        id: number;
        username: string;
        name: string;
        avatar_small_url: string;
    };
    publication: {
        id: number;
        name: string;
        avatar_url: string;
    } | null;
}

interface ZennResponse {
    articles: ZennArticle[];
    next_page: string | null;
}

export const Zenn = () => {
    const [zennArticles, setArticles] = useState<ZennResponse | null>(null);
    const [mdShow, setMdShow] = useState<boolean>(true);
    let [windowWidth, setwindowWidth] = useState<number>(0);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const articles = await getZennArticles<ZennResponse>(
                    "uyuy_create"
                );

                articles.articles.sort((a, b) => a.id - b.id);

                if (!articles === null) {
                    console.log("No articles found");
                } else {
                    setArticles(articles);
                }
            } catch (error) {
                console.error("Error fetching articles:", error);
            }
        };

        fetchArticles();

        const updateVisibility = () => {
            setMdShow(window.innerWidth >= 768);
            windowWidth = window.innerWidth;
            setwindowWidth(windowWidth);
        };

        window.addEventListener("resize", updateVisibility);
        updateVisibility();

        return () => {
            window.removeEventListener("resize", updateVisibility);
        };
    }, []);

    const estimatedTime = (lettersCount: number) => {
        if (lettersCount !== null) {
            return Math.round(lettersCount / 400) + "分";
        }
    };

    return (
        <section className="bg-base-100 rounded-box w-11/12 m-20">
            <ul className="list bg-base-100 rounded-box shadow-md p-5">
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
                    <span>Zenn記事一覧</span>
                </li>
                {zennArticles !== null &&
                    zennArticles.articles.map((article) => (
                        <div key={article.id}>
                            <Link
                                href={`https://zenn.dev/uyuy_create/articles/${article.slug}`}
                                target="_blank"
                            >
                                <li
                                    className="list-row"
                                    key={article.id}
                                >
                                    <div className="text-3xl">
                                        {article.emoji}
                                    </div>
                                    <div>
                                        <div className="font-bold">
                                            {article.title}
                                        </div>
                                        <div className="text-xs opacity-60">
                                            {article.body_letters_count}文字
                                            目安 :{" "}
                                            {estimatedTime(
                                                article.body_letters_count
                                            )}
                                        </div>
                                    </div>
                                    {mdShow && (
                                        <div>
                                            <p className="text-xs md:text-sm text-gray-500 transition-all duration-300">
                                                更新日 :{" "}
                                                {article.body_updated_at
                                                    .split("T")[0]
                                                    .replaceAll("-", "/") +
                                                    " " +
                                                    article.body_updated_at
                                                        .split("T")[1]
                                                        .split(".")[0]}
                                            </p>
                                            <p className="text-xs md:text-sm text-gray-500 transition-all duration-300">
                                                公開日 :{" "}
                                                {article.published_at
                                                    .split("T")[0]
                                                    .replaceAll("-", "/") +
                                                    " " +
                                                    article.published_at
                                                        .split("T")[1]
                                                        .split(".")[0]}
                                            </p>
                                        </div>
                                    )}
                                </li>
                            </Link>
                        </div>
                    ))}
            </ul>
        </section>
    );
};
