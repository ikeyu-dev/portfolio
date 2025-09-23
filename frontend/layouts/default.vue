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
        class="bg-gradient-gray flex justify-between items-center transition-colors duration-300 p-4 sticky top-0 z-10"
    >
        <div class="flex items-center">
            <span
                class="text-lg font-bold text-gray-200 transition-colors duration-300"
            >
                {{ title }}
            </span>
        </div>
    </header>
    <slot />
</template>
