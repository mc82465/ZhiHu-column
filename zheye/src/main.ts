import { createApp } from 'vue'
import { createStore } from 'vuex'
import router from './router'
import store from './store'
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
