<template lang="pug">
  .o-pokemons
    pokemon(
      v-for="(item, key) in items"
      :key="key"
      :pokemon="item"
    )
</template>

<script>
// import { mapState } from 'vuex'
// import component from '@/components/component.vue'

export default {
  components: {
    // component
    pokemon: () => import('@/components/02-molecules/pokemon/default'),
  },
  props: {
    // propierty: { required: false, type: String },
    items: {
      required: true,
      type: Array
    }
  },

  data () {
    return {
      data: ''
    }
  },

  computed: {
    // ...mapState({
    // homeCampaign: state => state.homeCampaign
    // })
  },

  watch: {},
  created () {},
  mounted () {},
  updated () {},
  methods: {}
}
</script>

<style lang="sass" scoped>
</style>
