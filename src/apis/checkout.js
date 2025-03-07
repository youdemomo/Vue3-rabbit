import request from '@/utils/http'

// todo: 获取下单详情
export const getCheckInfoAPI = () =>
  request({
    url: '/member/order/pre',
  })

// todo: 生成订单
export const createOrderAPI = data =>
  request({
    url: '/member/order',
    method: 'POST',
    data,
  })
