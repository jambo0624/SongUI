import './lib/song.scss'
import './index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import './static/font/iconfont.js'
import { router } from './router'
import 'github-markdown-css'
import Markdown from "./components/Markdown.vue"

const app = createApp(App)
app.use(router)
app.mount('#app')
app.component('Markdown', Markdown)
