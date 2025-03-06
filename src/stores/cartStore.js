import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useUserStore } from './userStore'
import { insertCartAPI, findNewCartListAPI, delCartAPI } from '@/apis/cart'

export const useCartStore = defineStore(
  'cart',
  () => {
    // todo: 拿到用户token，判断是否登录
    const userStore = useUserStore()
    const isLogin = computed(() => userStore.userInfo.token)
    // 购物车列表
    const cartList = ref([])

    // todo: 获取购物车列表
    const updateNewList = async () => {
      const res = await findNewCartListAPI()
      cartList.value = res.result
    }

    // todo: 添加到购物车
    const addCart = async goods => {
      if (isLogin.value) {
        // 登录之后的逻辑（走接口），后面都一样
        const { skuId, count } = goods
        await insertCartAPI({ skuId, count })
        updateNewList()
      } else {
        // 判断商品是否加入购物车(通过传来的skuId是否能在cartList中找到)
        const item = cartList.value.find(good => good.skuId === goods.skuId)

        if (item) {
          // 商品已在购物车中
          item.count++
        } else {
          cartList.value.push(goods)
        }
      }
    }

    // todo: 删除购物车商品
    const delCart = async skuId => {
      if (isLogin.value) {
        await delCartAPI([skuId])
        updateNewList()
      } else {
        // skuId作为购物车商品的唯一标识
        const i = cartList.value.findIndex(good => skuId === good.skuId)

        // 根据下标删除商品
        cartList.value.splice(i, 1)
      }
    }

    // todo: 计算总量
    const allCount = computed(() =>
      cartList.value.reduce((a, b) => a + b.count, 0),
    )

    // todo: 计算总价
    const allPrice = computed(() =>
      cartList.value.reduce((a, b) => a + b.count * b.price, 0).toFixed(2),
    )

    // todo: 列表购物车单选框
    const singleCheck = (skuId, selected) => {
      const item = cartList.value.find(item => item.skuId === skuId)
      item.selected = selected
    }

    // todo: 计算是否全选
    const isAll = computed(() =>
      cartList.value.every(item => item.selected === true),
    )

    // todo: 全选框功能
    const allCheck = selected => {
      cartList.value.forEach(item => {
        item.selected = selected
      })
    }

    // todo: 计算列表购物车已选商品数量
    const selectedCount = computed(() =>
      cartList.value
        .filter(item => item.selected === true)
        .reduce((a, b) => a + b.count, 0),
    )

    // todo: 计算列表购物车已选商品价格
    const selectedPrice = computed(() =>
      cartList.value
        .filter(item => item.selected === true)
        .reduce((a, b) => a + b.count * b.price, 0)
        .toFixed(2),
    )

    // todo: 清空购物车
    const clearCart = () => {
      cartList.value = []
    }

    return {
      cartList,
      addCart,
      delCart,
      allCount,
      allPrice,
      singleCheck,
      isAll,
      allCheck,
      selectedCount,
      selectedPrice,
      clearCart,
    }
  },
  {
    persist: true,
  },
)
