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
  S_POKEMON: {},
  S_FAVORITES: []
}
const getters = {
  G_FILTER: (state) => (params) => {
    let results = state.S_POKEMONS
    if (params.search.length) {
      results = results.filter((element) => {
        return element.name.toLowerCase().includes(params.search.toLowerCase())
      })
    }
    if (params.favorite) {
      let resultFavorite = []
      results.forEach(element => {
        state.S_FAVORITES.forEach(item => {
          if (item === element.name) {
            resultFavorite.push(element)
          }
        })
      })
      results = resultFavorite
    }
    return results
  }
}
const mutations = {
  SET_DATA (state, params) {
    // console.log(params)
    Vue.set(state, params.destination, params.data)
  },
  PUSH_DATA (state, params) {
    state[params.destination].push(params.data)
  },
  DELETE_DATA (state, params) {
    const index = state[params.destination].findIndex(item => item.name === params.data)
    state[params.destination].splice(index, 1)
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
  },
  async A_GET_POKEMON ({ commit  }, params) {
    try {
      const { data } = await HTTP.get(`pokemon/${params}`)
      
      commit('SET_DATA', {
        destination: 'S_POKEMON',
        data: data
      })

    } catch (error) {
      console.log('ERROR_REGISTER [ACTION]', error)
    }
  },
  A_ASIGN_FAVORITE ({ commit  }, params) {
    commit('PUSH_DATA', {
      destination: 'S_FAVORITES',
      data: params
    })
  },
  A_DELETE_FAVORITE ({ commit  }, params) {
    commit('DELETE_DATA', {
      destination: 'S_FAVORITES',
      data: params
    })
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
