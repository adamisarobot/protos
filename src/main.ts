import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'
const locale = window.location.pathname.replace(/^\/([^/]+).*/, '$1')

const app = createApp(App)

app.use(createPinia())
app.use(
  createI18n({
    legacy: false,
    locale: locale === '/' ? 'en' : locale,
    messages: {
      en: {
        title: 'You did it!',
        home: 'Home',
        about: 'About',
        about_message: 'This is an about page.'
      },
      fr: {
        title: 'Tu as réussi!',
        home: 'Accueil',
        about: 'À propos',
        about_message: 'Ceci est une page à propos.'
      }
    }
  })
)
app.use(router)

app.mount('#app')
