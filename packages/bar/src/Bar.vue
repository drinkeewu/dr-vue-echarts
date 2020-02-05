<template>
  <vchart
    :style="style"
    autoresize
    :theme="theme"
    :options="options"
  />
</template>

<script>
import vchart from 'components/vchart';
import { bar } from 'utils/formatter';


export default {
  name: 'BarChart',
  components: {
    vchart,
  },
  props: {
    option: {
      type: Object,
      default() {
        return {};
      },
    },
    theme: {
      type: String,
      default: 'walden',
    },
    data: {
      type: Array,
      default() {
        return [];
      },
    },
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: '100%',
    },
    title: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'bar', // bar / line
    },
    xLabel: {
      type: String,
      default: '',
    },
    yLabel: {
      type: String,
      default: '',
    },
    legend: {
      type: Boolean,
      default: false,
    },
    colors: {
      type: Array,
      default() {
        return [];
      },
    },
    zoom: {
      type: Boolean,
      default: false,
    },
    labelRotate: {
      type: Boolean,
      default: false,
    },
    labelRotateDeg: {
      type: Number,
      default: 40,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    /** 光滑曲线 */
    smooth: {
      type: Boolean,
      default: true,
    },
    /** 每个柱状图颜色是否不相同 */
    rainbow: {
      type: Boolean,
      default: false,
    },
    /** 水平柱状图 */
    horizontal: {
      type: Boolean,
      default: false,
    },
    /** 横坐标标题文字是否纵向显示 */
    labelVertical: {
      type: Boolean,
      default: false,
    },
    /** 默认缩放范围 */
    zoomRange: {
      type: Array,
      default() {
        return [0, 100];
      },
    },
    /** 图表布局设置 */
    grid: {
      type: Object,
      default() {
        return null;
      },
    },
  },
  computed: {
    style() {
      const { width, height } = this;
      return {
        width,
        height,
      };
    },
    options() {
      const {
        seriesData, labels, names,
      } = bar(this.data);

      const options = {
        xAxis: {
          name: this.xLabel,
          type: this.horizontal ? 'value' : 'category',
          data: labels,
          axisLine: {
            lineStyle: {
              type: 'dased',
            },
          },
          splitLine: {
            show: this.horizontal,
            lineStyle: {
              type: 'dashed',
            },
          },

        },
        yAxis: {
          name: this.horizontal
            ? ''
            : (this.yLabel && this.yLabel.split('').join('\n')),
          nameLocation: 'middle',
          nameRotate: 0.1,
          nameGap: 50,
          type: this.horizontal ? 'category' : 'value',
          data: labels,
          axisLine: {
            lineStyle: {
              color: 'transparent',
            },
          },

          splitLine: {
            show: !this.horizontal,
            lineStyle: {
              type: 'dashed',
            },
          },
        },
        legend: {
          show: this.legend,
          data: names,
          type: 'scroll',
          width: '70%',
          right: '10px',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            animation: false,
            label: {
              backgroundColor: '#717b97',
            },
          },
        },
        series: seriesData,
      };
      return {
        ...options,
        ...this.option,
      };
    },
  },
};
</script>
