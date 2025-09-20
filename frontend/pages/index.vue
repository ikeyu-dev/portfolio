<script setup lang="ts">
import { ref, onMounted } from "vue";

onMounted(() => {
    const aboutMeBlock = document.getElementById("about_me_block");
    if (!aboutMeBlock) return;

    const data = [
        { question: "ABOUT ME -ikeyu", answer: " Welcome to my portfolio ✋" },
        { question: "Name?", answer: " Yuma Ikeda / いけゆう" },
        {
            question: "Where?",
            answer: " 日本工業大学 先進工学部データサイエンス学科",
        },
        { question: "Community?", answer: " NPO法人NxTEND 新規事業推進室" },
        {
            question: "Skill?",
            answer: " HTML, CSS, TypeScript, Python",
        },
        {
            question: "Framework?",
            answer: " Nuxt.js, Next.js, Vue.js, FastAPI",
        },
        { question: "Goal?", answer: " フルスタックエンジニア" },
    ];

    const typeText = (
        element: HTMLElement,
        text: string,
        callback: (() => void) | null
    ) => {
        let index = 0;
        const interval = setInterval(() => {
            element.textContent += text[index];
            index++;
            if (index === text.length) {
                clearInterval(interval);
                if (callback) callback();
            }
        }, 15);
    };

    data.forEach((item, index) => {
        setTimeout(() => {
            const question = document.createElement("pre");
            question.setAttribute("data-prefix", "$");
            const questionCode = document.createElement("code");
            question.appendChild(questionCode);
            aboutMeBlock.appendChild(question);

            typeText(questionCode, item.question, () => {
                setTimeout(() => {
                    const answer = document.createElement("pre");
                    answer.setAttribute("data-prefix", ">");
                    answer.classList.add("text-success");
                    const answerCode = document.createElement("code");
                    answer.appendChild(answerCode);
                    aboutMeBlock.appendChild(answer);

                    typeText(answerCode, item.answer, null);
                }, 500);
            });
        }, index * 1500);
    });
});
</script>
<template>
    <div class="bg-gray-50 transition-colors duration-300">
        <div
            class="flex items-center justify-center"
            style="min-height: calc(100svh - 60px)"
        >
            <div class="flex flex-col items-center">
                <div class="grid grid-cols-3 gap-4 mx-auto place-items-center">
                    <div
                        class="col-span-2 mockup-code bg-gray-800 text-primary-content my-4 w-11/12 h-96 rounded-2xl hover:scale-101 transition-transform duration-300 text-xs md:text-sm"
                        id="about_me_block"
                    ></div>
                    <img
                        class="col-span-1 w-10/12 max-h-80 my-4 rounded-full shadow-lg"
                        src="https://lh3.googleusercontent.com/a/ACg8ocJyKmN00v0EKYBId9b_gms6XRo-YnT7ZbgZVYPma5cNTPhMnjo=s576-c-no"
                        alt="NO IMAGE"
                    />
                </div>
                <Urls />

                <Tech />

                <Zenn />
            </div>
        </div>
    </div>
</template>
