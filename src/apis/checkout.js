import request from '@/utils/http'

// todo: 获取下单详情
export const getCheckInfoAPI = () =>
  request({
    url: '/member/order/pre',
  })
