<template lang="pug">
  .m-pokemon
    span(
      @click="$modal.show(`pokemon-detail-${pokemon.name}`)"
    ) {{ pokemon.name }}
    i.icon-star

    modal(
      :name="`pokemon-detail-${pokemon.name}`"
      :width="550"
      height="auto"
      :adaptive="true"
      class="c-modal"
    )
      pokemon-detail
</template>

<script>
// import { mapState } from 'vuex'
// import component from '@/components/component.vue'

export default {
  components: {
    // component
    pokemonDetail: () => import('@/components/02-molecules/pokemon/detail'),
  },
  props: {
    // propierty: { required: false, type: String },
    pokemon: {
      required: true,
      type: Object
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
