<template lang="pug">
div.col
    h5.mb-1 {{ title }}
    transition(name="fade")
        div.inline-flex.rounded-md.shadow-sm(
            role="group"
            v-show="generateUniqueValueParameters")

            button.btn-filter-center(
                v-for='(filter, index) in generateUniqueValueParameters[filterName]',
                :key='index',
                :class="[activeElement == filter ? 'bg-yellow-300' : ''],[index == 0? 'btn-filter-start': '']",
                :style="[numberOfSearchResults(filterName, filter) == 0 ? 'opacity: 0.4' : '']",
                @click.prevent='activeFilter(filter)')
                | {{ filter }}

            button.btn-filter-end(
                @click.prevent="activeFilter('')") все

</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    props: ['title', 'filterName'],
    emits: ['filterValue'],
    data() {
        return {
            activeElement: '',
        }
    },
    methods: {
        ...mapActions(['changeLimitDownload']),
        activeFilter(filter) {
            this.changeLimitDownload(100)    
            if (this.activeElement != filter) {
                this.activeElement = filter
                this.$emit('filterValue', filter)     
            } else if (this.activeElement == filter) {
                this.activeElement = ''
                this.$emit('filterValue', '') 
            } else {
                this.$emit('filterValue', '')
            }
        },
    },
    computed: {
        ...mapGetters('filterModule',[
            'generateUniqueValueParameters',
            'filterProducts',
            'numberOfSearchResults'
        ]),
    },
    
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>