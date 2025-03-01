import httpInstance from '@/utils/http'

// 获取轮播图
export function getBannerAPI(params = {}) {
  // 解构获取轮播图类型，默认是1（主页），分类是2
  const { distributionSite = '1' } = params

  return httpInstance({
    url: '/home/banner',
    params: {
      distributionSite,
    },
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

// 获取所有商品列表
export const getGoodsAPI = () =>
  httpInstance({
    url: '/home/goods',
  })
