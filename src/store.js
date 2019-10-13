import Vue from 'vue'
import Vuex from 'vuex'
import storeFile from './store/file'
import storeProject from './store/project'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    storeFile,
    storeProject
  }
})
