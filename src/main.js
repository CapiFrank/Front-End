import { createApp } from 'vue'
import App from './App.vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import router from "./router.js"
import Default from './layout/default.vue'
import Blank from './layout/blank.vue'

const app = createApp(App)
app.use(BootstrapVue3)
app.use(router)
app.component('default-layout', Default)
app.component('blank-layout', Blank)
app.mount('#app')
