<template lang="pug">
Head
    title PMT
    meta(
        type="description"
        content="About my app"
        head-key="description"
    )
the-header
section.container.max-w-screen-xl.mx-auto.p-6
    slot
</template>

<script setup>
import TheHeader from "@/components/header/TheHeader";
import { defineAsyncComponent } from "vue";
import { Head } from "@inertiajs/inertia-vue3";
</script>
