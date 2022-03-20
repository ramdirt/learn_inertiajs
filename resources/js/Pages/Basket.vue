<template lang="pug">

div.row.mt-5.justify-content-center.row-cols-1.row-cols-sm-1.row-cols-md-2

  div.col-sm-6
    the-basket-item(
        v-for='product in basket',
        :key='product.id',
        :product='product')

  div.col-sm-6.text-center
    div.row.justify-content-center
      div.card(style='width: 18rem;')
        div.card-body.text-center
          p К оплате: {{ totalBasketValue }} рублей
          Link.btn.btn-danger(to='/ordering') Перейти к оформлению

</template>

<script>
import { mapGetters } from "vuex";
import TheBasketItem from "@/components/basket/TheBasketItem.vue";

export default {
    computed: {
        ...mapGetters("basketModule", ["basket", "totalBasketValue"]),
    },
    components: {
        TheBasketItem,
    },
};
</script>

<style></style>
