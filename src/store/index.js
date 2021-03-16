import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0,
  },
  getters: {
    counter: (state) => state.counter,
  },

  mutations: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      if (state.counter == 0) {
        state.counter = 0
      } else {
        state.counter--
      }
    },
  },
  actions: {
    Increment({ commit }) {
      commit('increment')
    },
    Decrement({ commit }) {
      commit('decrement')
    },
  },
  modules: {},
})
