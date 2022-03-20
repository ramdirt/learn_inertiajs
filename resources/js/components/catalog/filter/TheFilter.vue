<template lang="pug">
div
  div.flex.flex-row.gap-5.flex-wrap

    the-filter-item(
      title='Размер покрышки',
      filterName='tyre_diameter',
      @filterValue='changeDiameter')

    the-filter-item(
      title='Состав твердости',
      filterName='hardness_compound',
      @filterValue='changeShore')

</template>

<script>
import TheFilterItem from './TheFilterItem.vue'
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      diameter: '',
      shore: '',
    }
  },
  methods: {
    ...mapMutations('filterModule', ['changeFilter']),
    changeDiameter(diameter) {
      this.diameter = diameter
      this.viewType()
    },
    changeShore(shore) {
      this.shore = shore
      this.viewType()
    },
    viewType() {
      this.$store.commit('filterModule/changeFilter', { diameter: this.diameter, shore: this.shore})
    }
  },
  components: {
    TheFilterItem
  }
}
</script>

<style>

</style>