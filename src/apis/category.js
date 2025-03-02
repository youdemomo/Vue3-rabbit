import request from '@/utils/http'

// 获取一级分类列表
export function getCategoryListAPI(id) {
  return request({
    url: '/category',
    params: {
      id,
    },
  })
}

// 获取二级分类列表
export const getCategoryFilterAPI = id =>
  request({
    url: '/category/sub/filter',
    params: {
      id,
    },
  })

// 获取二级分类列表中的导航数据
export const getSubCategoryAPI = data =>
  request({
    url: '/category/goods/temporary',
    method: 'POST',
    data,
  })
