<template lang="pug">

.col-md-5.col-lg-4.order-md-last
    h4.d-flex.justify-content-between.align-items-center.mb-3
        span.text-dark Состав заказа
    ul.list-group.mb-3
        li.list-group-item.d-flex.justify-content-between.lh-sm
            div
                h6.my-0 Название товара
                small.text-muted Краткое описание
            span.text-muted 12₽
        li.list-group-item.d-flex.justify-content-between
            span Итого (₽)
            strong 20₽

</template>

<script>
export default {

}
</script>