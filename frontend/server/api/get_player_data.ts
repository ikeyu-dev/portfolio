import { defineEventHandler, getQuery } from "h3";
import { useRuntimeConfig } from "#imports";
import type { PlayerData } from "~/composables/genshin_score_checker/player_interface";
import { ref } from "vue";

export default defineEventHandler(async (event) => {
    const uid = getQuery(event).uid;
    const config = useRuntimeConfig();
    const PLAYERS_API_URL = config.public.PLAYERS_API_URL;
    const url = PLAYERS_API_URL + uid;
    const response = await $fetch<PlayerData>(url, {
        method: "GET",
        headers: {
            "User-Agent": "uyuyu",
        },
    });
    return response;
});
