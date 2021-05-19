<template lang="pug">
  .m-pokemon-detail
    i.icon-close
    .m-pokemon-detail__image
      img(
        src="@/assets/images/wallpaper.png"
      )
      img(
        :src="S_POKEMON.sprites.other['official-artwork'].front_default"
      )
    ul
      li
        span Name
        | {{ S_POKEMON.name }}
      li
        span Weight
        | {{ S_POKEMON.weight }}
      li
        span Height
        | {{ S_POKEMON.height }}
      li
        span Types
        | {{ nameTypes() }}
    .m-pokemon-detail__footer
      .m-btn Share to my friends
      i.icon-star(
        :class="stateFavorite ? 'active' : ''"
        @click="changeStateFavorite"
      )
</template>

<script>
import { mapState, mapActions } from 'vuex'
// import component from '@/components/component.vue'

export default {
  components: {
    // component
  },
  props: {
    // propierty: { required: false, type: String },
  },

  data () {
    return {
      data: '',
      stateFavorite: false
    }
  },

  computed: {
    ...mapState({
      S_POKEMON: state => state.Pokemons.S_POKEMON,
      S_FAVORITES: state => state.Pokemons.S_FAVORITES
    })
  },
  watch: {},
  created () {
    const initialState = this.S_FAVORITES.find(item => item === this.S_POKEMON.name)
    console.log(this.S_FAVORITES)
    if (initialState) {
      this.stateFavorite = true
    } else {
      this.stateFavorite = false
    }
  },
  mounted () {},
  updated () {},
  methods: {
    ...mapActions({
      A_ASIGN_FAVORITE: 'Pokemons/A_ASIGN_FAVORITE',
      A_DELETE_FAVORITE: 'Pokemons/A_DELETE_FAVORITE'
    }),
    nameTypes () {
      let values = ''
      this.S_POKEMON.types.forEach((element, key) => {
        values += this.capitalizeFirstLetter(element.type.name)
        
        if (key < this.S_POKEMON.types.length - 1) {
          values += ', '
        }
      })
      return values
    },
    capitalizeFirstLetter(str) {
      // converting first letter to uppercase
      const capitalized = str.replace(/^./, str[0].toUpperCase());
      return capitalized;
    },
    changeStateFavorite () {
      this.stateFavorite = !this.stateFavorite
      
      if (this.stateFavorite) {
        this.A_ASIGN_FAVORITE(this.S_POKEMON.name)
      } else {
        this.A_DELETE_FAVORITE(this.S_POKEMON.name)
      }
      this.$emit('changed', true)
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
