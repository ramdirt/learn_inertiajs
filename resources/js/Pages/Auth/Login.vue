<template>
    <Head title="Login" />

    <main class="grid place-items-center min-h-screen">
        <section class="bg-white p-8 rounded-xl max-w-md mx-auto border">
            <h1 class="text-3xl mb-1">Login</h1>
            <form @submit.prevent="submit" class="max-w-md mx-auto mt-8">
                <div class="mb-3">
                    <label
                        for="email"
                        class="block mb-2 uppercase font-bold text-xs text-gray-700"
                        >Email</label
                    >
                    <input
                        v-model="form.email"
                        type="email"
                        name="email"
                        id="email"
                        class="border border-gray-400 p-2 w-full rounded"
                    />
                    <div
                        v-if="form.errors.email"
                        v-text="form.errors.email"
                        class="text-red-500 text-xs"
                    ></div>
                </div>
                <div class="mb-3">
                    <label
                        for="password"
                        class="block mb-2 uppercase font-bold text-xs text-gray-700"
                        >password</label
                    >
                    <input
                        v-model="form.password"
                        type="password"
                        name="password"
                        id="password"
                        class="border border-gray-400 p-2 w-full rounded"
                    />
                    <div
                        v-if="form.errors.password"
                        v-text="form.errors.password"
                        class="text-red-500 text-xs"
                    ></div>
                </div>
                <button
                    type="submit"
                    class="bg-blue-400 text-white rounded py-2 px-4 hover:bg-blue-500"
                    :disabled="form.processing"
                >
                    Log In
                </button>
            </form>
        </section>
    </main>
</template>

<script>
export default {
    layout: null,
};
</script>

<script setup>
import { useForm } from "@inertiajs/inertia-vue3";

let form = useForm({
    email: "",
    password: "",
});

let submit = () => {
    form.post("/login", form);
};
</script>
