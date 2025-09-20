<template>
    <div class="bg-gray-50 transition-colors duration-300">
        <div
            class="flex items-center justify-center"
            style="min-height: calc(100svh - 60px)"
        >
            <div class="flex flex-col items-center py-12">
                <img
                    class="w-1/3 mb-4 rounded-full shadow-lg transition-all duration-300"
                    src="https://lh3.googleusercontent.com/a/ACg8ocJyKmN00v0EKYBId9b_gms6XRo-YnT7ZbgZVYPma5cNTPhMnjo=s576-c-no"
                    alt="NO IMAGE"
                />
                <p
                    class="mb-1 text-2xl font-semibold text-gray-900 transition-all duration-300"
                >
                    Yuma Ikeda / いけゆう
                </p>
                <div
                    class="mockup-code bg-gray-800 text-primary-content m-10 w-11/12"
                >
                    <pre data-prefix="~"><code>Name?</code></pre>
                    <pre
                        data-prefix=">"
                        class="text-success"
                    ><code> Yuma Ikeda / いけゆう</code></pre>
                    <pre data-prefix="~"><code>Where?</code></pre>
                    <pre
                        data-prefix=">"
                        class="text-success"
                    ><code> 日本工業大学 先進工学部データサイエンス学科</code></pre>
                    <pre data-prefix="~"><code>Community?</code></pre>
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
