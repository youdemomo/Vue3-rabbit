import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 引入初始样式文件
import '@/styles/common.scss'

// 引入懒加载指令插件
import { lazyPlugin } from './directives'

// 引入全局组件插件
import { componentPlugin } from './components'

// 引入pinia数据持久化插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)

app.mount('#app')
