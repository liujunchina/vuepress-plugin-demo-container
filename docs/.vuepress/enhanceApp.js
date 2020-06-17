import Antd from 'ant-design-vue'
import CustomDemoBlock from './CustomDemoBlock.vue'
import 'ant-design-vue/dist/antd.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueForm from '@lljj/vue-json-schema-form'

export default ({
  Vue
}) => {
  Vue.component('CustomDemoBlock', CustomDemoBlock)
  Vue.use(Antd)
  Vue.use(ElementUI)
  Vue.component('VueForm', VueForm)
}
