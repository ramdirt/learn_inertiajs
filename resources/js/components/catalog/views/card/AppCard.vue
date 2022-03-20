<template lang="pug">
div.col
  div.card.m-1.h-100
    img.card-img-top(
      :src='`./assets/img/small/${this.product.id}.jpg`',
      :alt='product.title')
    div.card-body
      h5.cart-text {{ product.title }} 
      div.d-flex.justify-content-between.align-items-center
        div.btn-group
        
          router-link.btn.btn-sm.btn-outline-secondary(
            :to='`/product/${product.id}`') Подробнее
          
          button.btn.btn-outline-secondary.btn-sm(
            v-if='countItemInBasket(product.id) > 0',
            @click="actionsBasket({action: 'decrease', id: +product.id})")
            i.fas.fa-minus
          
          button.btn.btn-sm.btn-outline-secondary(
            @click="actionsBasket({action: 'add', id: +product.id})")
            | {{ product.price * $store.state.usd }}₽
            span.position-absolute.top-0.start-100.translate-middle.badge.rounded-pill.bg-danger
              span(v-if='countItemInBasket(product.id) != 0')
                | {{ countItemInBasket(product.id) }}

</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: ['product'],
  methods: {
    ...mapActions('basketModule', ['actionsBasket'])

  },
  computed: {
      ...mapGetters('basketModule', ['countItemInBasket'])
  }
}
</script>