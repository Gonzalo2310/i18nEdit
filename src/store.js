import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    messages: [],
    url: './editor',
    languages: []
  },
  mutations: {
    updateMessage (state, messages) {
      state.messages = messages['default']
    },
    updateUrl (state, url) {
      state.url = url
    }
  },
  actions: {
    async renoveImport ({ commit }) {
      await import('@/editor')
        .then((messages) => {
          commit('updateMessage', messages)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    updateUrl ({ commit }, url) {
      commit('updateUrl', url)
    }
  }
})
