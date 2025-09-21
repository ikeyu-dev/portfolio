<script setup lang="ts">
import { get_Zenn_articles } from "~/composables/zenn";
import type { ZennResponse } from "~/composables/zenn_interface";

const zenn_articles = await get_Zenn_articles<ZennResponse>("uyuy_create");
if (zenn_articles !== null) {
    zenn_articles.articles.sort((a, b) => a.id - b.id);
} else {
}

function estimated_Time(letters_count: number) {
    if (letters_count !== null) {
        return Math.round(letters_count / 400) + "分";
    }
}
</script>

<template>
    <section class="text-gray-600 body-font">
        <div class="flex flex-wrap">
            <div
                v-if="zenn_articles !== null"
                v-for="article in zenn_articles.articles"
                class="p-2 mx-auto md:w-1/2 w-4/5"
            >
                <NuxtLink
                    :to="`https://zenn.dev/uyuy_create/articles/${article.slug}`"
                    target="_blank"
                    class="p-2"
                >
                    <div
                        class="h-full flex items-center border-gray-200 border px-4 rounded-xl transition-all duration-300"
                    >
                        <div class="flex-grow">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                version="1.1"
                                x="0px"
                                y="0px"
                                viewBox="0 0 88.3 88.3"
                                style="enable-background: new 0 0 88.3 88.3"
                                xml:space="preserve"
                                class="h-5 w-5 fill-current transition-all duration-300"
                            >
                                <g fill="#3EA8FF">
                                    <path
                                        class="st0"
                                        d="M3.9,83.3h17c0.9,0,1.7-0.5,2.2-1.2L69.9,5.2c0.6-1-0.1-2.2-1.3-2.2H52.5c-0.8,0-1.5,0.4-1.9,1.1L3.1,81.9   C2.8,82.5,3.2,83.3,3.9,83.3z"
                                    />
                                    <path
                                        class="st0"
                                        d="M62.5,82.1l22.1-35.5c0.7-1.1-0.1-2.5-1.4-2.5h-16c-0.6,0-1.2,0.3-1.5,0.8L43,81.2c-0.6,0.9,0.1,2.1,1.2,2.1   h16.3C61.3,83.3,62.1,82.9,62.5,82.1z"
                                    />
                                </g>
                            </svg>
                            <p
                                class="pt-2 text-lg font-semibold text-gray-900 transition-all duration-300"
                            >
                                {{ article.emoji }} {{ article.title }}
                            </p>
                            <p
                                class="text-sm text-gray-500 mt-1 transition-all duration-300"
                            >
                                更新日 :
                                {{
                                    article.body_updated_at
                                        .split("T")[0]
                                        .replaceAll("-", "/") +
                                    " " +
                                    article.body_updated_at
                                        .split("T")[1]
                                        .split(".")[0]
                                }}
                            </p>
                            <p
                                class="text-sm text-gray-500 transition-all duration-300"
                            >
                                公開日 :
                                {{
                                    article.published_at
                                        .split("T")[0]
                                        .replaceAll("-", "/") +
                                    " " +
                                    article.published_at
                                        .split("T")[1]
                                        .split(".")[0]
                                }}
                            </p>
                            <p
                                class="text-right text-xs text-gray-500 transition-all duration-300"
                            >
                                {{ article.body_letters_count }}文字
                            </p>
                            <p
                                class="text-right text-xs text-gray-500 transition-all duration-300"
                            >
                                目安 :
                                {{ estimated_Time(article.body_letters_count) }}
                            </p>
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>
