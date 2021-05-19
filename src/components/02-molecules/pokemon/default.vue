<template lang="pug">
  .m-pokemon
    span(
      @click="openDetail"
    ) {{ pokemon.name }}
    i.icon-star(
      :class="stateFavorite ? 'active' : ''"
      @click="changeStateFavorite"
    )

    modal(
      :name="`pokemon-detail-${pokemon.name}`"
      :width="550"
      height="auto"
      :adaptive="true"
      class="c-modal"
    )
      pokemon-detail(
        @changed="chageModal"
      )
</template>

<script>
import { mapActions } from 'vuex'
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
      data: '',
      stateFavorite: false
    }
  },

  computed: {},
  watch: {},
  created () {},
  mounted () {},
  updated () {},
  methods: {
    ...mapActions({
      A_GET_POKEMON: 'Pokemons/A_GET_POKEMON',
      A_ASIGN_FAVORITE: 'Pokemons/A_ASIGN_FAVORITE',
      A_DELETE_FAVORITE: 'Pokemons/A_DELETE_FAVORITE'
    }),
    async openDetail () {
      try {
        await this.A_GET_POKEMON(this.pokemon.name)
        this.$modal.show(`pokemon-detail-${this.pokemon.name}`)
      } catch (error) {
        console.log('[MOLECULE] POKEMON DETAIL', error)
      }
    },
    changeStateFavorite () {
      this.stateFavorite = !this.stateFavorite
      
      if (this.stateFavorite) {
        this.A_ASIGN_FAVORITE(this.pokemon.name)
      } else {
        this.A_DELETE_FAVORITE(this.pokemon.name)
      }
    },
    chageModal () {
      this.stateFavorite = !this.stateFavorite
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
