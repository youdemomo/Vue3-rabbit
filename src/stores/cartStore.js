import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore = defineStore(
  'cart',
  () => {
    // 购物车列表
    const cartList = ref([])

    // todo: 添加到购物车
    const addCart = goods => {
      // 判断商品是否加入购物车(通过传来的skuId是否能在cartList中找到)
      const item = cartList.value.find(good => good.skuId === goods.skuId)

      if (item) {
        // 商品已在购物车中
        item.count++
      } else {
        cartList.value.push(goods)
      }
    }

    return {
      cartList,
      addCart,
    }
  },
  {
    persist: true,
  },
)
