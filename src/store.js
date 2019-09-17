import Vue from 'vue'
import Vuex from 'vuex'
import { getAllTree } from './store/getData'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tree: [],
    elTree: []
  },
  mutations: {
    updateTree: (state, tree) => { state.tree = tree },
    updateElTree: (state, tree) => { state.elTree = tree }
  },
  actions: {
    initTree ({ commit }) {
      getAllTree(commit)
    }
  }
})
