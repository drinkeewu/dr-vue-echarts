import MapChart from './src/Map.vue';
MapChart.install = function (Vue) {
  Vue.component(MapChart.name, MapChart)
}

export default MapChart;
