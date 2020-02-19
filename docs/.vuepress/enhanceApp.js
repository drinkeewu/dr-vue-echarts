/**
 * 扩展 VuePress 应用
 */

import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css';
import '../.vuepress/public/style/common.css'
import { BarChart, MapChart, PieChart } from '../../index'
import AttrTable from '../.vuepress/components/Common/AttrTable.vue'

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  // ...做一些其他的应用级别的优化
  
  Vue.use(ElementUI)
  Vue.component(BarChart.name, BarChart)
  Vue.component(MapChart.name, MapChart)
  Vue.component(PieChart.name, PieChart)
  Vue.component(AttrTable.name, AttrTable)
  
}