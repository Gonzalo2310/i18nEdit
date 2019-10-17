import Vue from 'vue'
import Vuex from 'vuex'
import storeFile from './store/file'
import storeProject from './store/project'
import storeLanguage from './store/language'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    storeFile,
    storeProject,
    storeLanguage
  }
})
