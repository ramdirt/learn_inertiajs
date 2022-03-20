<template lang="pug">

div.row.row-cols-1.row-cols-sm-2.row-cols-md-3.row-cols-lg-4.row-cols-xl-4.row-cols-xxl-5.g-3.mt-2.mt-sm-0.mb-4
  app-card(
      v-for='(product, index) in products',
      :key='index',
      :product='product')

</template>

<script>
import { mapGetters } from 'vuex'
import AppCard from './AppCard.vue'

export default {
    props: ['products'],
    components: {
        AppCard
    },
    computed: {
        ...mapGetters('filterModule',['generateNameParameters',]),
    }
}
</script>