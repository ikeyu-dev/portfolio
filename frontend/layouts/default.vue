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
        title.value = "Ikeyu's Portfolio";
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
    </header>
    <slot />
</template>
