import request from '@/utils/http'

// todo: 用户登录
export const loginAPI = ({ account, password }) =>
  request({
    url: '/login',
    method: 'POST',
    data: {
      account,
      password,
    },
  })

// todo: 获取“猜你喜欢”商品列表
export const getLikeListAPI = ({ limit = 4 }) =>
  request({
    url: '/goods/relevant',
    params: {
      limit,
    },
  })
