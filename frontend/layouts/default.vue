<script setup lang="ts">
import { onMounted } from 'vue';
import { toggleDarkMode } from '~/composables/theme_mode';
import { test } from '~/composables/test';

test("uyuy_create")

onMounted(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
});
</script>

<template>
    <header class="bg-gray-50 border-b border-gray-300 dark:bg-gray-800 dark:border-gray-600 transition-colors duration-300">
        <div class="mx-auto flex items-center justify-end gap-2" style="padding: 10px;">
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
