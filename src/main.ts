import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
import Jambo from './components/Jambo.vue'
import Jambo2 from './components/Jambo2.vue'

const history = createWebHashHistory()
const router = createRouter({
    history,
    routes: [
        {path: '/',component: Jambo},
        {path: '/xxx',component: Jambo2}
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
