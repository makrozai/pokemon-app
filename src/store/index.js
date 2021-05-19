import Vue from 'vue'
import Vuex from 'vuex'

import Pokemons from './Pokemons/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Pokemons
  }
})
/**
 * THIS FORMAT NAMED FUNCTIONS :
 * State      -> S_
 * Mutation   -> M_
 * Action     -> A_
 * Getter     -> G_
 *
 * FORMAT FUNCTION LOGICS
 * SET      -> setting data in state
 * PUSH     -> pushing data in array state
 *
 * DEFAULT MUTATIONS
 * SET_DATA     -> set data in element state
 * PUSH_DATA    -> push data in element state
 */
