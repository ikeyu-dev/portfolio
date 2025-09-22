<script setup lang="ts">
import { ref, onMounted } from "vue";

onMounted(() => {
    const aboutMeBlock = document.getElementById("about_me_block");
    if (!aboutMeBlock) return;

    const aboutMeData = [
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

    aboutMeData.forEach((item, index) => {
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
        }, index * 2000);
    });
});
</script>
<template>
    <div class="bg-gradient-gray transition-colors duration-300 h-full">
        <div style="min-height: calc(100svh - 60px)">
            <div class="flex flex-col items-center">
                <div
                    class="md:grid md:grid-cols-4 md:gap-4 place-items-center pb-20 w-9/12"
                >
                    <div
                        class="md:col-span-3 mockup-code bg-black text-primary-content my-4 w-11/12 h-72 md:h-96 rounded-2xl hover:scale-101 transition-transform duration-300 text-xs md:text-sm"
                        id="about_me_block"
                    ></div>
                    <div class="md:col-span-1 w-11/12">
                        <img
                            class="max-h-80 my-4 rounded-full shadow-lg"
                            src="https://lh3.googleusercontent.com/a/ACg8ocJyKmN00v0EKYBId9b_gms6XRo-YnT7ZbgZVYPma5cNTPhMnjo=s576-c-no"
                            alt="NO IMAGE"
                        />
                        <Urls />

                        <Tech />
                    </div>
                </div>

                <Zenn />
            </div>
        </div>
    </div>
</template>
