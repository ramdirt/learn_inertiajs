<template>
    <div>
        <!-- <template v-for="link in users.links" :key="link.id">
            <Link v-if="link.url" v-html="link.label" :href="link.url" />
            <span v-else v-html="link.label"></span>
        </template> -->
        <Component
            v-for="link in links"
            :is="link.url ? 'Link' : 'span'"
            :href="link.url"
            :key="link.id"
            :class="{ 'text-gray-500': !link.url, 'font-bold': link.active }"
            class="px-1"
            v-html="link.label"
        />
    </div>
</template>

<script>
export default {
    props: {
        links: Array,
    },
};
</script>

<style></style>
