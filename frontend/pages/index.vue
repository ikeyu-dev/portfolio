<template>
    <div class="bg-gray-50 transition-colors duration-300">
        <div
            class="flex items-center justify-center"
            style="min-height: calc(100svh - 60px)"
        >
            <div class="flex flex-col items-center">
                <img
                    class="w-1/3 my-4 rounded-full shadow-lg"
                    src="https://lh3.googleusercontent.com/a/ACg8ocJyKmN00v0EKYBId9b_gms6XRo-YnT7ZbgZVYPma5cNTPhMnjo=s576-c-no"
                    alt="NO IMAGE"
                />
                <p class="text-2xl font-semibold text-gray-900">
                    Yuma Ikeda / いけゆう
                </p>
                <div
                    class="mockup-code bg-gray-800 text-primary-content my-4 mx-10 w-11/12 hover:scale-101 transition-transform duration-300"
                >
                    <pre data-prefix="$"><code>Name?</code></pre>
                    <pre
                        data-prefix=">"
                        class="text-success"
                    ><code> Yuma Ikeda / いけゆう</code></pre>
                    <pre data-prefix="$"><code>Where?</code></pre>
                    <pre
                        data-prefix=">"
                        class="text-success"
                    ><code> 日本工業大学 先進工学部データサイエンス学科</code></pre>
                    <pre data-prefix="$"><code>Community?</code></pre>
                    <pre
                        data-prefix=">"
                        class="text-success"
                    ><code> NPO法人NxTEND</code></pre>
                </div>
                <Urls />

                <Tech />

                <Zenn />
            </div>
        </div>
    </div>
</template>
