import WordCloudChart from './packages/word-cloud';
import BarChart from './packages/bar';
import MapChart from './packages/map';
import PieChart from './packages/pie';
import LineChart from './packages/line';

const components = [
  WordCloudChart,
  BarChart,
  MapChart,
  PieChart,
  LineChart,
];

// eslint-disable-next-line func-names
const install = function (Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};
export {
  WordCloudChart,
  BarChart,
  MapChart,
  PieChart,
  LineChart,
};
export default {
  install,
};
