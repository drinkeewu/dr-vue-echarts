<template>
  <vchart
    ref="el"
    autoresize
    :options="options"
    :style="style"
    v-bind="$attrs"
    :theme="theme"
  />
</template>

<script>
import 'echarts';
import 'echarts/map/js/china';
import 'echarts/extension/bmap/bmap';
import vchart from 'vue-echarts';
import waldenTheme from '../../../theme/walden.json'
vchart.registerTheme('walden', waldenTheme)

import { PROVINCE_DIR, STRING_PROP, OBJECT_PROP, ARRAY_PROP, NUMBER_PROP } from '../../../shared/constants';


const provinces = Object.values(PROVINCE_DIR);

function importProvinceMap(name) {
  const fileName = PROVINCE_DIR[name];
  fileName && require(`echarts/map/js/province/${fileName}`);
}


function importAllProvinceMap() {
  provinces.forEach((name) => {
    importProvinceMap(name);
  });
}


export default {
  name: 'MapChart',
  components: {
    vchart,
  },
  props: {
    theme: STRING_PROP('walden'),
    option: OBJECT_PROP(),
    width: STRING_PROP('100%'),
    height: STRING_PROP('100%'),
    title: STRING_PROP(),
    data: ARRAY_PROP(),
    mapType: STRING_PROP('map'),
    titleColor: STRING_PROP('#000'),
    titlePosition: STRING_PROP('center'),
    areaColor: STRING_PROP('#eaeaea'),
    borderColor: STRING_PROP('#999999'),
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
    labelColor: {
      type: String,
      default: '#333',
    },
    visualMapText: {
      type: Array,
      default() {
        return [];
      },
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
      const initVisualMapText = [MAX, MIN];
      const options = {
        visualMap: {
          type: 'continuous',
          orient: 'horizontal',
          itemWidth: 10,
          itemHeight: 80,
          min: MIN,
          max: MAX,
          text: this.visualMapText.length > 0 
            ? this.visualMapText 
            : initVisualMapText,

          // inRange: {
          //   color: [this.lowColor, this.highColor],
          // },
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
    mapType: {
      immediate: true,
      handler(type) {
        importProvinceMap(type);
      },
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
