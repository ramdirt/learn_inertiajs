<template>
    <Link
        class="text-black-500 hover:underline"
        :class="{ 'font-bold underline': active }"
    >
        <slot />
    </Link>
</template>

<script setup>
let props = defineProps({
    active: Boolean,
});
</script>
