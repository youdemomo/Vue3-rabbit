// todo: 存储用户登录数据
import { defineStore } from 'pinia'
import { loginAPI } from '@/apis/user'
import { ref } from 'vue'
import { useCartStore } from './cartStore'
import { mergeCartAPI } from '@/apis/cart'

export const useUserStore = defineStore(
  'user',
  () => {
    // 定义store
    const userInfo = ref({})
    const cartStore = useCartStore()

    // todo: 定义获取用户信息的action
    const getUserInfo = async ({ account, password }) => {
      const res = await loginAPI({ account, password })
      userInfo.value = res.result

      // 登录时将本地购物车合并到接口购物车
      await mergeCartAPI(
        cartStore.cartList.map(item => {
          return {
            skuId: item.skuId,
            selected: item.selected,
            count: item.count,
          }
        }),
      )

      // 获取最新的购物车列表
      cartStore.updateNewList()
    }

    // todo: 清除用户信息(退出登录)
    const clearUserInfo = () => {
      userInfo.value = {}
      // 清空购物车
      cartStore.clearCart()
    }

    return {
      userInfo,
      getUserInfo,
      clearUserInfo,
    }
  },
  // 开启数据持久化
  {
    persist: true,
  },
)
