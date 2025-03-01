// 封装分类业务
import { getCategoryListAPI } from '@/apis/category'
import { onMounted, ref } from 'vue'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'

export function useCategory() {
  // 获取数据
  const categoryData = ref({})
  // 获取路由器
  const route = useRoute()
  // 第一次路由时，从路由器中拿到传参
  const getCategoryList = async (id = route.params.id) => {
    const res = await getCategoryListAPI(id)
    // console.log(res);
    categoryData.value = res.result
  }

  onMounted(() => getCategoryList())

  // bro: 路由参数变化时，将分类数据接口重新发送
  // 通过参数to获取最新路由传参
  onBeforeRouteUpdate(to => {
    // console.log("检测到路由变化");
    getCategoryList(to.params.id)
  })

  return {
    categoryData,
  }
}
