<template>
  <vchart
    ref="el"
    autoresizse
    :options="options"
    :style="style"
  />
</template>

<script>
import echarts from 'echarts';
import 'echarts/map/js/china';
import 'echarts/extension/bmap/bmap';
import 'echarts/map/js/province/guangdong';
import vchart from 'vue-echarts';


export default {
  name: 'Map',
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
    data: {
      type: Array,
      default() {
        return [];
      },
    },
    mapType: {
      type: String,
      default: 'china',
    },
    titleColor: {
      type: String,
      default: '#000',
    },
    titlePosition: {
      type: String,
      default: 'center',
    },
    itemColor: {
      type: String,
      default: '#f4e925',
    },
    itemShadowColor: {
      type: String,
      default: '#f4e925',
    },
    itemMinSize: {
      type: Number,
      default: 3,
    },
    itemMaxSize: {
      type: Number,
      default: 60,
    },
    areaColor: {
      type: String,
      default: '#eaeaea',
    },
    borderColor: {
      type: String,
      default: '#999',
    },
    type: {
      type: String,
      default: 'map',
    },

    areaEmphasisColor: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: 'china',
    },

    roam: Boolean,
    zoom: {
      type: Number,
      default: 1,
    },
    center: Array,
    autoTooltip: Boolean,
    lowColor: {
      type: String,
      default: '#ffd65a',
    },
    highColor: {
      type: String,
      default: '#fa675c',
    },
    backgroundColor: {
      type: String,
      default: 'transparent',
    },
    labelColor: {
      type: String,
      default: '#333',
    },
  },
  data() {
    return {
      chart: null,
    };
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
      const { data } = this;
      const MIN = data.length > 0
        ? data.length > 1
          ? Math.min(...(data.map(i => i.value)))
          : 0
        : 0;
      const MAX = data.length > 0
        ? Math.max(...(data.map(i => i.value)))
        : 0;
      const options = {
        visualMap: {
          type: 'continuous',
          orient: 'horizontal',
          itemWidth: 10,
          itemHeight: 80,
          min: MIN,
          max: MAX,
          text: ['高', '低'],

          inRange: {
            color: [this.lowColor, this.highColor],
          },
          textStyle: {
            color: this.titleColor,
          },
          right: '15px',
          bottom: '15px',
        },
        series: [
          {
            name: this.name,
            type: 'map',
            mapType: this.mapType,
            roam: this.roam,
            itemStyle: {
              normal: {
                areaColor: this.areaColor,
                borderColor: this.borderColor,
                label: {
                  show(params) {
                    console.log('show', params);
                    return true;
                  },
                  textStyle: {
                    color: this.labelColor,
                  },
                },
              },
              emphasis: {
                label: { show: true },
              },

            },
            label: {
              emphasis: {
                textStyle: {
                  color: this.labelColor,
                },
              },
            },
            data,
            zlevel: 1,

          },
        ],
      };
      return {
        ...options,
        ...this.option,
      };
    },
  },
  watch: {
    mapType(val) {

    },
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const { el } = this.$refs;
      this.chart = el.chart;
      Object.keys(this.$listeners).forEach((event) => {
        if (event.indexOf('zr:') === 0) {
          el.chart.on(event.slice(3), (e) => {
            this.$emit(event, e);
          });
        } else {
          el.chart.on(event, (e) => {
            this.$emit(event, e);
          });
        }
      });
    },
  },
};
</script>
