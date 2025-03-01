import request from '@/utils/http'

// 获取二级分类列表
export function getCategoryListAPI(id) {
  return request({
    url: '/category',
    params: {
      id,
    },
  })
}
