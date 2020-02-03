<template>
  <div
    ref="chart"
    :style="{
      width: '100%',
      height: '100%'
    }"
  />
</template>

<script>
import 'echarts-wordcloud';
import Echart from 'echarts';
import isEmpty from 'lodash/isEmpty';
import debounce from 'lodash/debounce';
import { addListener, removeListener } from 'resize-detector';
import waldenTheme from '../../../theme/walden.json';

const DEFAULT_COLOR = waldenTheme.theme.color;

export default {
  name: 'WordCloudChart',
  props: {
    data: {
      type: Array,
      default() {
        return [];
      },
    },
    sizeRange: {

      type: Array,
      default() {
        return [0, 100];
      },
    },
  },
  data() {
    return {
      el: null,
      chart: null,
      chartId: new Date().getTime(),
    };
  },
  computed: {
    option() {
      if (this.data.length === 0) {
        return {};
      }
      return {
        tooltip: {
        },
        series: [
          {
            type: 'wordCloud',
            sizeRange: this.sizeRange,
            rotationRange: [0, 90],
            shape: 'circle',
            textPadding: 0,
            autoSize: {
              enable: true,
              minSize: 600,
            },


            textStyle: {
              normal: {
                color() {
                  return DEFAULT_COLOR[
                    Math.floor(Math.random() * DEFAULT_COLOR.length)
                  ];
                },
              },
              emphasis: {
                shadowBlur: 10,
                shadowColor: '#999',
              },
            },
            data: this.data,
          },
        ],
      };
    },
  },
  watch: {
    option: {
      deep: true,
      handler() {
        this.render();
      },
    },
  },
  mounted() {
    this.render();
  },
  beforeDestroy() {
    removeListener(this.el);
  },
  methods: {
    render() {
      if (isEmpty(this.option)) {
        return;
      }
      this.el = this.$refs.chart;
      Echart.registerTheme('walden', waldenTheme);
      this.chart = Echart.init(this.el, 'walden');
      this.chart.setOption(this.option, false, true);
      addListener(this.el, debounce(() => {
        this.chart.resize();
      }, 100, {
        leading: true,
      }));
    },

  },
};
</script>
