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
import Echart from 'echarts';
import isEmpty from 'lodash/isEmpty';
import debounce from 'lodash/debounce';
import { addListener, removeListener } from 'resize-detector';
import waldenTheme from '../../../theme/walden.json';
import { STRING_PROP, ARRAY_PROP, BOOLEAN_PROP } from '../../../shared/constants'

const DEFAULT_COLOR = waldenTheme.color;

export default {
  name: 'WordCloudChart',
  props: {
    data: ARRAY_PROP(),
    sizeRange: ARRAY_PROP([0, 100]),
    theme: STRING_PROP('walden'),
    colorRange: ARRAY_PROP(DEFAULT_COLOR),
    drawOutOfBound: BOOLEAN_PROP(false)
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

      const { colorRange } = this
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

            drawOutOfBound: this.drawOutOfBound,
            

            textStyle: {
              normal: {
                color() {
                  return colorRange[
                    Math.floor(Math.random() * colorRange.length)
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
    theme: {
      immediate: true,
      handler(theme){
        import(`../../../theme/${theme}.json`).then(module => {
          this.registerTheme(theme, module.default)
        })
      }
    }
  },
  async mounted() {
    import('echarts-wordcloud').then(() => {
      this.render();
    })
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
      this.chart = Echart.init(this.el, this.theme);
      this.chart.setOption(this.option, false, true);
      addListener(this.el, debounce(() => {
        this.chart.resize();
      }, 100, {
        leading: true,
      }));
    },
    registerTheme(name, module) {
      Echart.registerTheme(name, module)
    }

  },
};
</script>
