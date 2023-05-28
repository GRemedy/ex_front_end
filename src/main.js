import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'virtual:windi.css'
import store from './store/store'
import router from './router/router'

const app = createApp(App)
app.use(VueAxios, axios)
app.use(store)
app.use(router)
app.mount('#app')