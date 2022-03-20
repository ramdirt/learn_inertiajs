<template lang="pug">
table.table-auto
  thead.bg-gray-50.dark_bg-gray-700
    tr
      th.py-3.px-6.text-xs.font-medium.tracking-wider.text-left.text-gray-700.uppercase.dark_text-gray-400 Название
      th.py-3.px-6.text-xs.font-medium.tracking-wider.text-left.text-gray-700.uppercase.dark_text-gray-400 Стоимость
      th.py-3.px-6.text-xs.font-medium.tracking-wider.text-left.text-gray-700.uppercase.dark_text-gray-400
  tbody
    app-table-row(
      v-for='(product, index) in products',
      :key='index',
      :product='product')

</template>

<script>
import { mapGetters } from 'vuex'
import AppTableRow from './AppTableRow.vue'

export default {
  props: ['products'],
  components: {
      AppTableRow
  },
  computed: {
      ...mapGetters('filterModule',['generateNameParameters',]),
  }
}
</script>

<style>

</style>