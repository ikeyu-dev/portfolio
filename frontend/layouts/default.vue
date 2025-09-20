<script setup lang="ts">
import { toggleDarkMode } from "~/composables/theme_mode";

const route = useRoute();
const currentPath = ref(route.path);
const title = ref("");

watch(route, (newRoute: any) => {
    currentPath.value = newRoute.path;
});

onMounted(() => {
    if (currentPath.value === "/") {
        title.value = "Portfolio";
    } else {
        title.value = currentPath.value.split("/")[1].replaceAll("_", " ");
    }
});
</script>

<template>
    <header
        class="flex justify-between items-center bg-gray-50 border-b border-gray-300 transition-colors duration-300 p-4"
    >
        <div class="flex items-center">
            <span
                class="text-lg font-bold text-gray-700 transition-colors duration-300"
            >
                {{ title }}
            </span>
        </div>
        <div class="flex items-center">
            <button
                @click="toggleDarkMode()"
                class="relative inline-flex items-center justify-center p-2 text-gray-500 rounded-lg hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 transition-colors duration-300"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    class="w-6 h-6 fill-current"
                >
                    <path
                        d="M448 256c0-106-86-192-192-192l0 384c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"
                    />
                </svg>
            </button>
        </div>
    </header>
    <slot />
</template>
