import { defineEventHandler, getQuery } from "h3";
import { useRuntimeConfig } from "#imports";
import { ref } from "vue";

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const PLAYERS_API_URL = config.public.PLAYERS_API_URL;
    const uid = getQuery(event).uid;
    const response = ref();
    if (!uid) {
        throw createError({
            statusCode: 400,
            statusMessage: "UID is required",
        });
    }
    const url = PLAYERS_API_URL + uid;
    response.value = await $fetch(url);
    return response.value.playerInfo;
});
