import LineChart from './src/Line.vue';
LineChart.install = function (Vue) {
  Vue.component(LineChart.name, LineChart)
}

export default LineChart;
