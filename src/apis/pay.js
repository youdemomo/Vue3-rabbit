import request from '@/utils/http'

// todo: 根据id返回订单详情
export const getOrderAPI = id =>
  request({
    url: `/member/order/${id}`,
  })
