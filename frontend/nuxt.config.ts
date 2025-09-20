// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
    ssr: true,
    compatibilityDate: "2024-11-01",
    css: ["~/static/css/main.css"],
    vite: {
        plugins: [tailwindcss()],
    },
    app: {
        head: {
            htmlAttrs: {
                lang: "ja",
                prefix: "og: http://ogp.me/ns#",
            },
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1",
            title: "ikeyu-portfolio",
        },
    },
    runtimeConfig: {
        public: {
            ZENN_GET_ARTICLES: "https://zenn.dev/api/articles?username=",
        },
    },
    devtools: { enabled: true },
});
