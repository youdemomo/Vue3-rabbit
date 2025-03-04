// axios基础封装
import axios from 'axios'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { useUserStore } from '@/stores/user'

// bro: 创建axios实例
const httpInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 6000,
})

// bro: 拦截器
// 1.axios请求拦截器
httpInstance.interceptors.request.use(
  config => {
    // 从pinia中获取token
    const userStore = useUserStore()
    const token = userStore.userInfo.token
    if (token) {
      // 将token拼接到header中，发送给后端(拼接方式由后端确定)
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  e => Promise.reject(e),
)

// 2.axios响应式拦截器
// axios响应式拦截器
httpInstance.interceptors.response.use(
  res => res.data,
  e => {
    // 统一错误提示
    ElMessage({
      type: 'warning',
      // 弹出后端返回的错误信息
      message: e.response.data.msg,
    })
    return Promise.reject(e)
  },
)

export default httpInstance
