// todo: 存储用户登录数据
import { defineStore } from 'pinia'
import { loginAPI } from '@/apis/user'
import { ref } from 'vue'

export const useUserStore = defineStore(
  'user',
  () => {
    // 定义store
    const userInfo = ref({})

    // 定义获取用户信息的action
    const getUserInfo = async ({ account, password }) => {
      const res = await loginAPI({ account, password })
      userInfo.value = res.result
    }

    return {
      userInfo,
      getUserInfo,
    }
  },
  // 开启数据持久化
  {
    persist: true,
  },
)
