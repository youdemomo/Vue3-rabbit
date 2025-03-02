import request from '@/utils/http'

// 获取商品详情
export const getDetailAPI = id =>
  request({
    url: '/goods',
    params: {
      id,
    },
  })

// 获取热榜商品
export const getHotGoodsAPI = ({ id, type, limit = 3 }) =>
  request({
    url: '/goods/hot',
    params: {
      id,
      type,
      limit,
    },
  })
