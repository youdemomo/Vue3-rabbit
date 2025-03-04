import request from '@/utils/http'

export const loginAPI = ({ account, password }) =>
  request({
    url: '/login',
    method: 'POST',
    data: {
      account,
      password,
    },
  })
