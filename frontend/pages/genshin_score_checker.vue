<script setup lang="ts">
import { ref } from "vue";
import type { PlayerData } from "~/composables/genshin_score_checker/player_interface";

const uid = ref("");
const response = ref();

async function calculate_Score() {
    const { data: player_all_data } = await useFetch<PlayerData>(
        `/api/get_player_data?uid=${uid.value}`
    );
    response.value = player_all_data.value;
}
</script>

<template>
    <div
        v-if="!response"
        class="bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
        <div
            class="flex items-center justify-center"
            style="min-height: calc(100svh - 60px)"
        >
            <div class="flex flex-col items-center py-12">
                <p
                    class="text-lg text-center text-gray-600 dark:text-gray-400 transition-colors duration-300"
                >
                    Put your Genshin Impact UID here.
                </p>
                <input
                    v-model.number="uid"
                    type="number"
                    placeholder="UID"
                    min="800000000"
                    class="flex md:w-full w-10/12 px-4 py-2 mt-4 text-lg text-gray-900 placeholder-gray-400 border border-gray-300 rounded-md dark:text-gray-100 dark:placeholder-gray-600 dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-50 focus:border-transparent transition-colors duration-300"
                    style="max-width: 300px"
                />
                <button
                    @click="calculate_Score()"
                    class="mt-8 md:w-10/12 w-1/2 flex justify-center items-center px-4 py-2 text-lg text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors duration-300"
                >
                    Caluculate
                </button>
            </div>
        </div>
    </div>
    <div
        v-if="response"
        class="mt-20"
    >
        <div>
            {{ response }}
        </div>
    </div>
</template>
