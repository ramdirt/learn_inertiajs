<template lang="pug">
tr.bg-white.border-b.dark_bg-gray-800.dark_border-gray-700
  td.py-2.px-4.text-sm.font-medium.text-gray-900.whitespace-wrap(
    @click='$router.push(`/product/${ product.id }`)', style='cursor: pointer') {{ product.title }}
  td.py-3.px-2.text-center.text-sm.text-gray-500.whitespace-nowrap {{ product.price * $store.state.usd }}₽
  td.py-3.px-4.text-sm.text-gray-500.whitespace-nowrap
    div
      button.btn-filter-start.hidden(
        v-if='countItemInBasket(product.id) > 0',
        @click="actionsBasket({action: 'decrease', id: +product.id})")
          p -

      button.btn-filter-start(@click="$router.push(`/product/${product.id}`)") Подробнее

      button.btn-filter-end(@click="actionsBasket({action: 'add', id: +product.id})") В корзину  
        span(v-if='countItemInBasket(product.id) != 0') {{ countItemInBasket(product.id) }}

        span.hidden +
          span(v-if='countItemInBasket(product.id) != 0') {{ countItemInBasket(product.id) }}

</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  props: ['product'],
  methods: {
      ...mapActions('basketModule', ['actionsBasket']),
  },
  computed: {
      ...mapGetters('basketModule', ['countItemInBasket'])
  }
}

</script>

<style>

</style>