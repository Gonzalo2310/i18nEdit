import VueI18n from 'vue-i18n'
import Vue from 'vue'

import es from './es'
import en from './en'

Vue.use(VueI18n)

const messages = {
  es,
  en
}

const i18n = new VueI18n({
  locale: 'en',
  messages,
  fallbackLocale: 'es'
})

export default i18n
