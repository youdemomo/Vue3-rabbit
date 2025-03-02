import request from '@/utils/http'

// 获取商品详情
export const getDetailAPI = id =>
  request({
    url: '/goods',
    params: {
      id,
    },
  })
