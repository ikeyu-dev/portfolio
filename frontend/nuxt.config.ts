// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    compatibilityDate: "2024-11-01",
    css: ["/static/css/main.css"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    app: {
        head: {
            htmlAttrs: {
                lang: "ja",
                prefix: "og: http://ogp.me/ns#",
            },
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1",
            title: "uyuyu",
        },
    },
    runtimeConfig: {
        public: {
            ZENN_GET_ARTICLES: "https://zenn.dev/api/articles?username=",
            PLAYERS_API_URL: "https://enka.network/api/uid/",
        },
    },
    devtools: { enabled: true },
});
