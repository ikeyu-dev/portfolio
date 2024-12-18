<script setup lang="ts">
import { ref, onMounted } from 'vue';

const white_mode = ref(true);
const dark_mode = ref(false);

function toggleDarkMode() {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
        white_mode.value = true;
        dark_mode.value = false;
    } else {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
        white_mode.value = false;
        dark_mode.value = true;
    }
}
onMounted(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        white_mode.value = false;
        dark_mode.value = true;
    } else {
        document.documentElement.classList.remove('dark');
    }
});
</script>

<template>
    <div class="bg-gray-50 dark:bg-gray-800">
        <header class="bg-gray-50 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div class="mx-auto flex items-center justify-end p-3">
                <button
                    @click="toggleDarkMode()"
                    class="relative inline-flex items-center justify-center p-2 text-gray-500 rounded-lg hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700"
                >
                    <svg v-if="white_mode" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-6 h-6 fill-current">
                        <path
                            d="M375.7 19.7c-1.5-8-6.9-14.7-14.4-17.8s-16.1-2.2-22.8 2.4L256 61.1 173.5 4.2c-6.7-4.6-15.3-5.5-22.8-2.4s-12.9 9.8-14.4 17.8l-18.1 98.5L19.7 136.3c-8 1.5-14.7 6.9-17.8 14.4s-2.2 16.1 2.4 22.8L61.1 256 4.2 338.5c-4.6 6.7-5.5 15.3-2.4 22.8s9.8 13 17.8 14.4l98.5 18.1 18.1 98.5c1.5 8 6.9 14.7 14.4 17.8s16.1 2.2 22.8-2.4L256 450.9l82.5 56.9c6.7 4.6 15.3 5.5 22.8 2.4s12.9-9.8 14.4-17.8l18.1-98.5 98.5-18.1c8-1.5 14.7-6.9 17.8-14.4s2.2-16.1-2.4-22.8L450.9 256l56.9-82.5c4.6-6.7 5.5-15.3 2.4-22.8s-9.8-12.9-17.8-14.4l-98.5-18.1L375.7 19.7zM269.6 110l65.6-45.2 14.4 78.3c1.8 9.8 9.5 17.5 19.3 19.3l78.3 14.4L402 242.4c-5.7 8.2-5.7 19 0 27.2l45.2 65.6-78.3 14.4c-9.8 1.8-17.5 9.5-19.3 19.3l-14.4 78.3L269.6 402c-8.2-5.7-19-5.7-27.2 0l-65.6 45.2-14.4-78.3c-1.8-9.8-9.5-17.5-19.3-19.3L64.8 335.2 110 269.6c5.7-8.2 5.7-19 0-27.2L64.8 176.8l78.3-14.4c9.8-1.8 17.5-9.5 19.3-19.3l14.4-78.3L242.4 110c8.2 5.7 19 5.7 27.2 0zM256 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM192 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z"
                        />
                    </svg>
                    <svg v-if="dark_mode" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="w-6 h-6 fill-current">
                        <path
                            d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"
                        />
                    </svg>
                </button>
            </div>
        </header>
        <div class="flex items-center justify-center" style="min-height: calc(100vh - 65px);">
            <div class="flex flex-col items-center py-12">
                <img class="w-24 h-24 mb-4 rounded-full shadow-lg" src="https://lh3.googleusercontent.com/a/ACg8ocJ-fMXlk0DT7K7ABGbbTqd2pHcqKjXy-oADh4TNzWzIhlZZ9gI=s432-c-no" alt="Profile picture"/>
                <p class="mb-1 text-2xl font-semibold text-gray-900 dark:text-white">
                    uyuyu
                </p>
                <p class="text-sm text-gray-500 dark:text-gray-400 mb-6">
                    student
                </p>
                <div class="flex gap-4">
                    <div>
                        <a target="_blank" href="https://x.com/uyuyu_create" class="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"xml:space="preserve" class="w-7 h-7 fill-current">
                                <path
                                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                                />
                            </svg>
                        </a>
                    </div>
                    <div>
                        <a target="_blank" href="https://github.com/uyuyuu09" class="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="w-7 h-7 fill-current">
                                <path
                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                />
                            </svg>
                        </a>
                    </div>
                    <div>
                        <a target="_blank" href="https://zenn.dev/uyuy_create" class="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                version="1.1"
                                x="0px"
                                y="0px"
                                viewBox="0 0 88.3 88.3"
                                style="enable-background: new 0 0 88.3 88.3"
                                xml:space="preserve"
                                class="h-7 w-7 fill-current"
                            >
                                <g fill="#3EA8FF">
                                    <path
                                        class="st0"
                                        d="M3.9,83.3h17c0.9,0,1.7-0.5,2.2-1.2L69.9,5.2c0.6-1-0.1-2.2-1.3-2.2H52.5c-0.8,0-1.5,0.4-1.9,1.1L3.1,81.9   C2.8,82.5,3.2,83.3,3.9,83.3z"
                                    />
                                    <path
                                        class="st0"
                                        d="M62.5,82.1l22.1-35.5c0.7-1.1-0.1-2.5-1.4-2.5h-16c-0.6,0-1.2,0.3-1.5,0.8L43,81.2c-0.6,0.9,0.1,2.1,1.2,2.1   h16.3C61.3,83.3,62.1,82.9,62.5,82.1z"
                                    />
                                </g>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>