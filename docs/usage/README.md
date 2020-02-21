# 快速开始

## 安装
```bash
npm i dr-vue-echarts -S
```

## 全局引入
在main.js中引入

```js
import Vue from 'vue';
import DrVueEcharts from 'dr-vue-charts';

Vue.use(DrVueEcharts)
```

## 按需引入
```js
import Vue from 'vue'
import { 
  BarChart,
  LineChart,
  PieChart,
  //...
} from 'dr-vue-charts'

Vue.use(BarChart);
Vue.use(LineChart)
Vue.use(PieChart)
//...
```
