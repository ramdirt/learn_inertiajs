<template lang="pug">
section.p-6.bg-gray-200
  header.flex.justify-between.container.max-w-screen-xl.mx-auto
    .flex.items-center
      Link(href="/").font-bold.text-lg PMT
    the-nav
the-admin-panel
</template>

<script setup>
import TheNav from "./TheNav";
import TheNavLink from "./TheNavLink";
import TheAdminPanel from "./TheAdminPanel";
import { computed } from "vue";

const admin = computed(() => usePage().props.value.admin);
</script>
