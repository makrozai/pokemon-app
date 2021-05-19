/* eslint-disable camelcase */
import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import {
  required,
  email,
  confirmed,
  alpha,
  alpha_spaces,
  integer,
  oneOf,
  max,
  alpha_num
} from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: 'El campo es requerido'
})
extend('email', {
  ...email,
  message: 'Ingresa un email válido'
})

extend('confirmed', {
  ...confirmed,
  message: 'Los campos deben coincidir'
})

extend('alpha', {
  ...alpha,
  message: 'Ingresar solo letras'
})

extend('alpha_spaces', {
  ...alpha_spaces,
  message: 'Ingresar solo letras'
})

extend('alpha_num', {
  ...alpha_num,
  message: 'Ingresar solo letras'
})

extend('integer', {
  ...integer,
  message: 'Ingresar solo números'
})

extend('decimal', {
  validate: (value, { decimals = '*', separator = '.' } = {}) => {
    if (value === null || value === undefined || value === '') {
      return {
        valid: false
      }
    }
    if (Number(decimals) === 0) {
      return {
        valid: /^-?\d*$/.test(value)
      }
    }
    const regexPart = decimals === '*' ? '+' : `{1,${decimals}}`
    const regex = new RegExp(`^[-+]?\\d*(\\${separator}\\d${regexPart})?([eE]{1}[-]?\\d+)?$`)

    return {
      valid: regex.test(value)
    }
  },
  message: 'Ingresar solo decimales'
})

extend('oneOf', {
  ...oneOf,
  message: 'Selecione una opción'
})

extend('max', {
  ...max,
  message: 'Superó el limite de caracteres'
})
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
