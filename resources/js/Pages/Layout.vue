<template lang="pug">
Head
    title PMT
    meta(
        type="description"
        content="About my app"
        head-key="description"
    )
the-header
section.container.max-width-sm.mx-auto
    slot
</template>

<script setup>
import TheHeader from "@/Components/Header/TheHeader";
import { Head } from "@inertiajs/inertia-vue3";
</script>
