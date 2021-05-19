<template lang="pug">
  validation-provider(
    :rules="rules"
    v-slot="{ errors }"
    :slim="true"
    tag="div"
  )
    .e-search(
      :class="[inputStyle,{ 'input--error' : errors[0] || forceSucessMessage !== '' }]"
    )
      label(
        @click="setFocusToInput()"
      )
        span(
          v-if="label"
        ) {{ label }}
        .e-search__input
          i.icon-search
          input(
            :name="name"
            :ref="name"
            :type='type'
            v-model="inputValue"
            :disabled='disabled'
            :placeholder="placeholder"
          )
      .input__error-caption(
        v-if="forceErrorMessage == '' && errors[0]"
      )
        span(
          v-if="errors[0]"
        ) {{ errors[0] }}
      .input__error-caption(
        v-if="forceSucessMessage !== ''"
      )
        span {{ forceSucessMessage }}
</template>

<script>
// import { mapState } from 'vuex'
// import component from '@/components/component.vue'

export default {
  components: {
    // component
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    rules: {
      type: String,
      default: ''
    },
    value: String,
    icon: {
      required: false,
      type: String
    },
    inputStyle: {
      required: false,
      type: String
    },
    typeStyle: {
      required: false,
      type: String
    },
    name: {
      required: false,
      type: String
    },
    label: {
      required: false,
      type: String
    },

    placeholder: {
      required: false,
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    forceErrorMessage: {
      type: String,
      default: ''
    },
    forceSucessMessage: {
      type: String,
      default: ''
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
    inputValue: {
      get () {
        return this.value
      },
      set (newVal) {
        this.$emit('input', newVal)
        this.$emit('change', newVal)
      }
    }
  },

  watch: {},
  created () {},
  mounted () {},
  updated () {},
  methods: {
    updateValue (e) {
      this.$emit('input', e.target.value)
    },

    setFocusToInput () {
      this.$refs[this.name].focus()
    }
  }
}
</script>
