// todo: 全局注册components下的组件
import ImageView from '@/components/ImageView/index.vue'
import Sku from '@/components/XtxSku/index.vue'

export const componentPlugin = {
  install(app) {
    // app.component('组件名称', ImageView)
    app.component('XtxImageView', ImageView)
    app.component('XtxSku', Sku)
  },
}
