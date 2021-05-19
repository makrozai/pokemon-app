<template lang="pug">
  .p-home
    .ed-grid.m-grid-2
      .m-cols-2 
        v-search(
          type="text"
          inputStyle="row"
          name="search"
          v-model="data.search"
          placeholder="Search"
        )
      .m-cols-2
        list-pokemons(
          :items="S_POKEMONS"
        )
    .p-home__footer
      .ed-grid.m-grid-2
        .m-cols-1
          a.m-btn.fullwidth(
            @click="filter = 'all'"
            :class="filter === 'all' ? '':'disabled'"
          )
            i.icon-bar
            | All
        .m-cols-1
          a.m-btn.fullwidth(
            @click="filter = 'favorites'"
            :class="filter === 'favorites' ? '':'disabled'"
          )
            i.icon-star
            | Favorites
</template>

<script>
import { mapState, mapActions } from 'vuex'
// import component from '@/components/component.vue'

export default {
  components: {
    // component
    vSearch: () => import('@/components/01-atoms/formElements/default'),
    listPokemons: () => import('@/components/03-organisms/listPokemons/default'),
  },
  props: {
    // propierty: { required: false, type: String },
  },

  data () {
    return {
      data: {
        search: ''
      },
      filter: 'all'
    }
  },

  computed: {
    ...mapState({
      S_POKEMONS: state => state.Pokemons.S_POKEMONS
    })
  },

  watch: {},
  async created () {
    await this.A_GET_POKEMONS()
  },
  mounted () {},
  updated () {},
  methods: {
    ...mapActions({
      A_GET_POKEMONS: 'Pokemons/A_GET_POKEMONS'
    })
  }
}
</script>

<style lang="sass" scoped>
</style>
