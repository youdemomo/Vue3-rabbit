// todo: 封装购物车接口
import request from '@/utils/http'

// todo: 加入购物车
export const insertCartAPI = ({ skuId, count }) =>
  request({
    url: '/member/cart',
    method: 'POST',
    data: {
      skuId,
      count,
    },
  })

// todo: 获取购物车列表
export const findNewCartListAPI = () =>
  request({
    url: '/member/cart',
  })

// todo: 删除购物车商品
export const delCartAPI = ids =>
  request({
    url: '/member/cart',
    method: 'DELETE',
    data: {
      ids,
    },
  })
