import { defineEventHandler, getQuery } from "h3";
import { useRuntimeConfig } from "#imports";
import { ref } from "vue";

export default defineEventHandler(async (event) => {
    const uid = getQuery(event).uid;
    const response = ref();
    if (!uid) {
        throw createError({
            statusCode: 400,
            statusMessage: "UID is required",
        });
    }
    const config = useRuntimeConfig();
    const PLAYERS_API_URL = config.public.PLAYERS_API_URL;
    const url = PLAYERS_API_URL + uid;
    // try {
    response.value = await $fetch(url);
    console.log(response.value);
    return response.value;
    // } catch (e) {
    //     throw createError({
    //         statusCode: 500,
    //         statusMessage: "Failed to fetch player data",
    //     });
    // }
});
