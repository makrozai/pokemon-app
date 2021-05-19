// IMPORT LIBRARIES
import Vue from 'vue'
// import jwtDecode from 'jwt-decode'
import createPersistedState from 'vuex-persistedstate'
import SecureLS from 'secure-ls'
// IMPORT SERVICES
// store/Auth/index.js

import { HTTP } from '@/plugins/axios'

const ls = new SecureLS({ isCompression: false })

const state = {
  S_POKEMONS: [],
  S_POKEMON: {}
}
const getters = {}
const mutations = {
  SET_DATA (state, params) {
    // console.log(params)
    Vue.set(state, params.destination, params.data)
  },
  PUSH_DATA (state, params) {
    state[params.destination].push(params.data)
  }
}
const actions = {
  async A_GET_POKEMONS ({ commit  }) {
    try {
      const { data } = await HTTP.get('pokemon')

      commit('SET_DATA', {
        destination: 'S_POKEMONS',
        data: data.results
      })

    } catch (error) {
      console.log('ERROR_REGISTER [ACTION]', error)
    }
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,

  plugins: [
    createPersistedState(
      {
        storage: {
          getItem: key => ls.get(key),
          setItem: (key, value) => ls.set(key, value),
          removeItem: key => ls.remove(key)
        }
      }
    )
  ]
}
