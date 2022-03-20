<template lang="pug">

.row.g-5
  the-order-list
  the-order-form

</template>

<script>
import TheOrderList from "@/components/ordering/TheOrderList.vue";
import TheOrderForm from "@/components/ordering/TheOrderForm.vue";

export default {
    components: {
        TheOrderList,
        TheOrderForm,
    },
};
</script>

<style></style>
