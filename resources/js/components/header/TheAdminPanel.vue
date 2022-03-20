<template lang="pug">
nav.px-6.py-2.bg-gray-100
    ul.flex.space-x-6.container.max-w-screen-xl.mx-auto
        li
            the-nav-link(
                href="/admin/users",
                :active="$page.component === 'Users'") Users
</template>

<script setup>
import TheNavLink from "./TheNavLink";
</script>
