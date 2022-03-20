<template lang="pug">
div.row.mb-5.justify-content-around

  div.col-5.text-end
    img.img-fluid(
        :src='`../assets/img/small/1.jpg`',
        :alt="product.title",
        style='max-width: 100px;')

  div.col-7.text-start
  
    h5.lead {{ product.title }}
    p {{ product.price * $store.state.usd * product.quantity }} ₽
      small.text-muted ({{ product.quantity }} &khcy; {{ product.price * $store.state.usd }}₽
    p
    div.btn-group(role='group', aria-label='Basic outlined example')

      button.btn.btn-sm.btn-outline-secondary(
          type='button',
          @click="actionsBasket({action: 'decrease', id: product.id})")
          | -
      button.btn.btn-sm.btn-outline-secondary(
          type='button',
          disabled='')
          | {{ product.quantity }}
      button.btn.btn-sm.btn-outline-secondary(
          type='button',
          @click="actionsBasket({action: 'increase', id: product.id})")
          | +

</template>

<script>
import {mapActions} from 'vuex'

export default {
  props: ['product'],
  methods: {
      ...mapActions('basketModule', ['actionsBasket'])
  },
}
</script>

<style>

</style>