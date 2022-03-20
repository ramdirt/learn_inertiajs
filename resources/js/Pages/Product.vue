<template lang="pug">
div.row.mt-3(v-if='product')
  div.col-sm-12.col-md-6
    img.img-fluid.img-thumbnail(
      :src='`../assets/img/${this.$route.params.id}.jpg`',
      :alt='product.title')
  div.col-md-6
    h1.lead.mt-2 {{ product.title }}
    .row.align-items-center.mt-3
      .col-4
        p.h2 {{ product.price * $store.state.usd }} ₽;
      .col
        button.btn.btn-danger В корзину
    p.lead {{ product.description }}
    div.card
      ul.list-group.list-group-flush(v-if='product.meta')
        li.list-group-item Состав твердности: {{ product.meta.hardness_compound }}
        li.list-group-item Давление: {{ product.meta.pressure }}
        li.list-group-item Ширина шины: {{ product.meta.tyre_width }} мм.
        li.list-group-item Условия использования: {{ product.meta.use_pattern  }} 
        li.list-group-item Жесткость: {{ product.meta.use_compound }}
        li.list-group-item Рисунок протектора: {{ product.meta.tread_pattern }}
        li.list-group-item Ширина обода: {{ product.meta.rim_width }}
div(v-else='')
  div.spinner-border(role='status')
    span.visually-hidden Загрузка...

</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  methods: {
  ...mapActions('requestModule', ['getProductsFromAPI'])
  },
  created: function() {
    this.getProductsFromAPI(this.$route.params.id)
  },
  computed: {
    ...mapGetters(['product'])
  },
  watch: {
    // при переходе на страницу с продуктом меняет title по шаблону
    $route: {
        immediate: true,
        handler(to, from) {
          let title = new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve(this.product.title);
              }, 2000);
          })
          .then(
            result => {
              document.title = 'Покрышка ' + result
            }
          )

          
        }
    },
  }
}
</script>

<style>

</style>