import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

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

    // todo: 删除购物车商品
    const delCart = skuId => {
      // skuId作为购物车商品的唯一标识
      const i = cartList.value.findIndex(good => skuId === good.skuId)

      // 根据下标删除商品
      cartList.value.splice(i, 1)
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

    return {
      cartList,
      addCart,
      delCart,
      allCount,
      allPrice,
      singleCheck,
      isAll,
      allCheck,
    }
  },
  {
    persist: true,
  },
)
