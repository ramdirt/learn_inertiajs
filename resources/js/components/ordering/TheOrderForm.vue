<template lang="pug">

.col-md-7.col-lg-8
  h4.mb-3 Оформление заказа
  form.needs-validation(novalidate='')
    .row.g-3

      .col-12
        label.form-label(for='firstName') ФИО
        input#firstName.form-control(type='text', placeholder='', value='', required='')

      .col-12
        label.form-label(for='email') Телефон
          span.text-muted
        input#email.form-control(type='email', placeholder='+8 (904) 555 35 35')

      .col-12
        label.form-label(for='email')
          | Электронная почта 
          span.text-muted (Не обязательно)
        input#email.form-control(type='email', placeholder='order@pmt.ru')

    hr.my-4
    button.w-100.btn.btn-warning.btn-lg(type='submit') Сделать заказ

</template>

<script>
export default {

}
</script>

<style>

</style>