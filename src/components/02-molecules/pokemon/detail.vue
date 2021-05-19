<template lang="pug">
  .m-pokemon-detail
    i.icon-close
    img(src="https://i.blogs.es/d2f1c3/pokemon-espada-escudo-pikachu-gigamax/1366_2000.jpeg")
    ul
      li
        span Name
        | Squirtle
      li
        span Name
        | Squirtle
    .m-pokemon-detail__footer
      .m-btn Share to my friends
      i.icon-star
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
    item: {
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
