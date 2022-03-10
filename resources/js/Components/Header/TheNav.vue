<template>
    <nav>
        <ul class="flex space-x-6">
            <li>
                <the-nav-link href="/" :active="$page.component === 'Home'">
                    Home
                </the-nav-link>
            </li>
            <li>
                <the-nav-link
                    href="/users"
                    :active="$page.component === 'Users'"
                >
                    Users
                </the-nav-link>
            </li>
            <li>
                <the-nav-link
                    href="/settings"
                    :active="$page.component === 'Settings'"
                >
                    Settings
                </the-nav-link>
            </li>
            <li>
                <Link
                    href="/logout"
                    method="post"
                    :data="{ foo: 'bar' }"
                    as="button"
                    class="text-black-500 hover:underline"
                    >Logout</Link
                >
            </li>
        </ul>
    </nav>
</template>

<script setup>
import TheNavLink from "@/Components/Header/TheNavLink";
</script>

<style></style>
