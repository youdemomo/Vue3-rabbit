import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 引入初始样式文件
import '@/styles/common.scss'

// 引入vueUse的判断对象是否在视口
import { useIntersectionObserver } from '@vueuse/core'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// 定义全局指令，用于图片懒加载
app.directive('img-lazy', {
  mounted(el, binding) {
    console.log(el, binding.value)
    useIntersectionObserver(
      // 监听目标
      el,
      ([{ isIntersecting }]) => {
        // 如果目标出现在视口，则会调用回调
        console.log(isIntersecting)
        if (isIntersecting) {
          el.src = binding.value
        }
      },
    )
  },
})
