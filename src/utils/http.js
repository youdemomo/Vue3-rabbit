// axios基础封装
import axios from 'axios'

// bro: 创建axios实例
const httpInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 6000,
})

// bro: 拦截器
// 1.axios请求拦截器
httpInstance.interceptors.request.use(
  config => {
    return config
  },
  e => Promise.reject(e),
)

// 2.axios响应式拦截器
// axios响应式拦截器
httpInstance.interceptors.response.use(
  res => res.data,
  e => {
    return Promise.reject(e)
  },
)

export default httpInstance
