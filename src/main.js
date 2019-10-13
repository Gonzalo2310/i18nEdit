import Vue from 'vue'
import App from './App.vue'
import store from './store'
import i18n from './locales'

import './plugins/element'

Vue.config.productionTip = false

Vue.mixin({
  methods: {
    eventVue (event, value = null) {
      if (value) {
        this.$emit(event, value)
      } else {
        this.$emit(event)
      }
    }
  }
})

new Vue({
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
