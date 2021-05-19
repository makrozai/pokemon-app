<template lang="pug">
  .p-home
    transition(
      name="fade"
    )
      .loading(
        v-if="!viewPage"
      )
        .image
          img(
            src="@/assets/images/pokeball.svg"
          )
    .ed-grid.m-grid-2
      .m-cols-2 
        v-search(
          type="text"
          inputStyle="row"
          name="search"
          v-model="search"
          placeholder="Search"
        )
      .m-cols-2
        list-pokemons(
          :items="list"
        )
        .p-home__not-found(
          v-if="list.length === 0"
        )
          h3 Uh-oh!
          p You look lost on your journey!
          .m-btn(
            @click="reset"
          ) Go back home
    .p-home__footer
      .ed-grid.s-grid-2
        .s-cols-1
          a.m-btn.fullwidth(
            @click="changeState(false)"
            :class="!filter ? '':'disabled'"
          )
            i.icon-bar
            | All
        .s-cols-1
          a.m-btn.fullwidth(
            @click="changeState(true)"
            :class="filter ? '':'disabled'"
          )
            i.icon-star
            | Favorites
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
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
      search: '',
      filter: false,
      list: [],
      viewPage: false
    }
  },

  computed: {
    ...mapState({
      S_POKEMONS: state => state.Pokemons.S_POKEMONS
    }),
    ...mapGetters({
      G_FILTER: 'Pokemons/G_FILTER'
    }),
  },

  watch: {
    search (val) {
      if (val.length >= 1) {
        this.list = this.G_FILTER({ 
          search: val,
          favorite: this.filter
        })
      } else {
        this.list = this.G_FILTER({
          search: val,
          favorite: this.filter
        })
      }
    }
  },
  async created () {
    await this.A_GET_POKEMONS()
    this.list = this.G_FILTER({
      search: this.search,
      favorite: this.filter
    })
    setTimeout(() => {
      this.viewPage = true
    }, 3000);
  },
  mounted () {},
  updated () {},
  methods: {
    ...mapActions({
      A_GET_POKEMONS: 'Pokemons/A_GET_POKEMONS'
    }),
    changeState (state) {
      this.filter = state
      this.list = this.G_FILTER({
        search: this.search,
        favorite: this.filter
      })
    },
    reset () {
      this.search = ''
      this.filter = false

      this.list = this.G_FILTER({
        search: this.search,
        favorite: this.filter
      })
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
