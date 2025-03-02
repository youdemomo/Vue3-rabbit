import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCatecory/index.vue'

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
      ],
    },
    // 登录
    { path: '/login', component: Login },
  ],
})

export default router
