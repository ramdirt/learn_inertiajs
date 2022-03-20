<template>
    <Head title="Users" />

    <div class="flex justify-between">
        <div class="flex item-center">
            <h1 class="text-3xl ml-3">Users</h1>

            <Link
                v-if="can.createUser"
                href="/users/create"
                as="button"
                class="bg-blue-400 text-white rounded py-2 px-4 hover:bg-blue-500 ml-2"
                >Create</Link
            >
        </div>

        <input
            v-model="search"
            type="text"
            placeholder="search"
            class="border px-2 rounded-lg"
        />
    </div>

    <div class="flex flex-col mt-5">
        <div class="-my-2 sm:-mx-6 lg:-mx-8">
            <div
                class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
            >
                <div
                    class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
                >
                    <table class="min-w-full divide-y divide-gray-200">
                        <tbody class="bg-white divide-y divide-gray-200">
                            <tr v-for="user in users.data" :key="user.id">
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="flex">
                                        <div
                                            class="text-sm font-medium text-gray-900"
                                        >
                                            {{ user.name }}
                                        </div>
                                    </div>
                                </td>
                                <td
                                    class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                                >
                                    <Link
                                        v-if="user.can.edit"
                                        :href="'/users/' + user.id + '/edit'"
                                        class="text-indigo-600 hover:text-indigo-900"
                                        >Edit</Link
                                    >
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <app-pagination :links="users.links" class="mt-6" />
</template>

<script setup>
import { ref, watch, defineAsyncComponent } from "vue";
import { Inertia } from "@inertiajs/inertia";
import throttle from "lodash/throttle";

let AppPagination = defineAsyncComponent(() => {
    return import("@/components/AppPagination");
});

let props = defineProps({
    users: Object,
    filters: Object,
    can: Object,
});

let search = ref(props.filters.search);

watch(
    search,
    throttle(function (value) {
        Inertia.get(
            "/users",
            { search: value },
            {
                preserveState: true,
                replace: true,
            }
        );
    }, 500)
);
</script>
