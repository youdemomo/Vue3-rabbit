import { computed, onBeforeUnmount, ref } from 'vue'
import dayjs from 'dayjs'

// 封装倒计时逻辑函数
export const useCountDown = () => {
  // 获取响应式数据
  const time = ref(0)
  // 用于关闭计时器
  let timer = null
  // 格式化时间为x分x秒
  const formatTime = computed(() => dayjs.unix(time.value).format('mm分ss秒'))
  // 开启倒计时函数
  const start = currentTime => {
    // 开启倒计时逻辑
    time.value = currentTime
    timer = setInterval(() => {
      time.value--
    }, 1000)
  }

  onBeforeUnmount(() => {
    timer && clearInterval(timer)
  })

  return {
    formatTime,
    start,
  }
}
