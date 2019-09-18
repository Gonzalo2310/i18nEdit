import Vue from 'vue'
import Vuex from 'vuex'
import { getAllTree, getFileContent } from './store/getData'
import searchUuid from './utils/searchUUID'

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
    },
    contentFile ({ commit }, uuid) {
      getFileContent(commit, uuid)
    }
  },
  getters: {
    searchById: state => uuid => {
      return searchUuid(uuid, state.tree)
    }
  }
})
