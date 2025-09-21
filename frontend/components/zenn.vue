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
    <section class="bg-base-100 rounded-box w-11/12 m-20">
        <ul class="list bg-base-100 rounded-box shadow-md">
            <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">
                Zenn記事一覧
            </li>
            <div
                v-if="zenn_articles !== null"
                v-for="article in zenn_articles.articles"
                class=""
            >
                <NuxtLink
                    :to="`https://zenn.dev/uyuy_create/articles/${article.slug}`"
                    target="_blank"
                >
                    <li class="list-row">
                        <div class="text-3xl">
                            {{ article.emoji }}
                        </div>
                        <div>
                            <div>{{ article.title }}</div>
                            <div class="text-xs opacity-60">
                                {{ article.body_letters_count }}文字 目安 :
                                {{ estimated_Time(article.body_letters_count) }}
                            </div>
                        </div>
                        <div>
                            <p
                                class="text-xs md:text-sm text-gray-500 transition-all duration-300"
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
                                class="text-xs md:text-sm text-gray-500 transition-all duration-300"
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
                        </div>
                    </li>
                </NuxtLink>
            </div>
        </ul>
    </section>
</template>
