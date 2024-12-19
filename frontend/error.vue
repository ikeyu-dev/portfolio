<script setup lang="ts">
import { onMounted } from 'vue';
import { toggleDarkMode } from '~/composables/theme_mode';

const error = useError();

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
    <div class="flex flex-col flex-wrap items-center justify-center bg-gray-50 dark:bg-gray-800 transition-colors duration-300" style="min-height: calc(100svh - 60px);">
        <section>
            <div class="p-5">
            <p class="text-6xl font-bold text-blue-500 dark:text-blue-100 text-center">{{ error?.statusCode }}</p>
            <p class="text-sm text-gray-500 dark:text-gray-400 transition-all duration-300 mt-4">
                {{ error?.statusCode === 404 ? 'お探しのページは見つかりませんでした。' : 'エラーが発生しました。' }}
            </p>
            </div>
            <section class="flex flex-col text-center items-center">
                <nuxt-link to="/" class="w-1/2 py-3 m-3 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    ホーム画面へ
                </nuxt-link>
            </section>
        </section>
    </div>
</template>
