<template lang="pug">
nav
    ul.flex.space-x-6
        li
            the-nav-link(href="/", :active="$page.component === 'Home'") Home
        li
            the-nav-link(href="/catalog", :active="$page.component === 'Catalog'") Catalog
        li
            the-nav-link(href="/basket", :active="$page.component === 'Basket'") Basket
        li(v-if="auth")
            Link(
                href="/logout",
                method="post",
                as="button"
                class="text-black-500 hover:underline" 
            ) Logout
</template>

<script setup>
import TheNavLink from "./TheNavLink";
import { computed } from "vue";
import { usePage } from "@inertiajs/inertia-vue3";

const auth = computed(() => usePage().props.value.auth);
</script>
