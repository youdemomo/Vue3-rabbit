// 引入vueUse的判断对象是否在视口
import { useIntersectionObserver } from '@vueuse/core'

// 定义懒加载插件
export const lazyPlugin = {
  install(app) {
    // 定义全局指令，用于图片懒加载
    app.directive('img-lazy', {
      mounted(el, binding) {
        console.log(el, binding.value)
        const { stop } = useIntersectionObserver(
          // 监听目标
          el,
          ([{ isIntersecting }]) => {
            // 如果目标出现在视口，则会调用回调
            console.log(isIntersecting)
            if (isIntersecting) {
              el.src = binding.value
              // 图片加载后停止监听
              stop()
            }
          },
        )
      },
    })
  },
}
