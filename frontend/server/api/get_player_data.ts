import { defineEventHandler, getQuery } from "h3";
import { useRuntimeConfig } from "#imports";
import { ref } from "vue";

export default defineEventHandler(async (event) => {
    const uid = getQuery(event).uid;
    if (!uid) {
        throw createError({
            statusCode: 400,
            statusMessage: "UID is required",
        });
    }
    const config = useRuntimeConfig();
    const PLAYERS_API_URL = config.public.PLAYERS_API_URL;
    const url = PLAYERS_API_URL + uid;
    const response = await $fetch(url);
    return response;
});
