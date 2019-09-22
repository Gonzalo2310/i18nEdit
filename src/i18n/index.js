import VueI18n from 'vue-i18n'
import Vue from 'vue'

import es from './locale/es/index'
import en from './locale/en/index'

Vue.use(VueI18n)

const messages = {
  es,
  en
}

const i18n = new VueI18n({
  locale: 'es',
  messages,
  fallbackLocale: 'en'
})

export default i18n
