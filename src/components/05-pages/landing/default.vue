<template lang="pug">
  .p-landing
    img(
      src="@/assets/images/pikachu.svg"
    )
    h2 Welcome to Pokédex
    p The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.
    router-link.m-btn(
      :to="{ name: 'HomePage' }"
    ) Get started
</template>

<script>
// import { mapState } from 'vuex'
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
