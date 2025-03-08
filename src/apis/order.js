import request from '@/utils/http'

// todo: 在个人中心获得所有订单
export const getUserOrderAPI = params =>
  request({
    url: '/member/order',
    method: 'GET',
    params,
  })
