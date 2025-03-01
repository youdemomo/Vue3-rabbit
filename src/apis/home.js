import httpInstance from '@/utils/http'

// 获取版型轮播图
export function getBannerAPI() {
  return httpInstance({
    url: '/home/banner',
  })
}

// 获取新鲜好物
export const findNewAPI = () => {
  return httpInstance({
    url: '/home/new',
  })
}

// 获取热门商品
export const getHotAPI = () =>
  httpInstance({
    url: '/home/hot',
  })
