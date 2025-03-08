import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCatecory/index.vue'
import Detail from '@/views/Detail/index.vue'
import CartList from '@/views/CartList/index.vue'
import Checkout from '@/views/Checkout/index.vue'
import Pay from '@/views/Pay/index.vue'
import PayBack from '@/views/Pay/PayBack.vue'
import Member from '@/views/Member/index.vue'
import UserInfo from '@/views/Member/components/UserInfo.vue'
import UserOrder from '@/views/Member/components/UserOrder.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 首页
    {
      path: '/',
      component: Layout,
      children: [
        // 主页
        {
          // 路径置空，未访问子路由时会渲染
          path: '',
          component: Home,
        },
        // 一级分类
        {
          path: 'category/:id',
          component: Category,
        },
        // 二级分类
        {
          path: 'category/sub/:id',
          component: SubCategory,
        },
        // 商品详情
        {
          path: 'detail/:id',
          component: Detail,
        },
        // 购物车
        {
          path: 'cartlist',
          component: CartList,
        },
        // 下单页面
        {
          path: 'checkout',
          component: Checkout,
        },
        // 支付界面
        {
          path: 'pay',
          component: Pay,
        },
        // 支付结果页
        {
          path: 'paycallback',
          component: PayBack,
        },
        // 个人中心
        {
          path: 'member',
          component: Member,
          children: [
            // 进入个人中心时重定向到用户界面
            {
              path: '',
              redirect: { name: 'user' },
            },
            {
              name: 'user',
              path: 'user',
              component: UserInfo,
            },
            {
              path: 'order',
              component: UserOrder,
            },
          ],
        },
      ],
    },
    // 登录
    { path: '/login', component: Login },
  ],
  // 路由滚动行为定制：路由跳转时，滚动条置顶
  scrollBehavior() {
    return {
      top: 0,
    }
  },
})

export default router
