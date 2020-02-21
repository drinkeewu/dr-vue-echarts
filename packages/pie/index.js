import PieChart from './src/Pie.vue';
PieChart.install = function (Vue) {
  Vue.component(PieChart.name, PieChart)
}

export default PieChart;
