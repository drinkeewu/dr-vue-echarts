<template>
  <component
    ref="el"
    v-if="chart" 
    :is="chart"
    class="chart" 
    autoresize 
    :options="options" 
    :theme="theme"
  />
</template>

<script>
import vchart from "../../../components/vchart";
import { DEFAULT_COLORS } from "../../../theme";
import {
  ARRAY_PROP,
  OBJECT_PROP,
  STRING_PROP,
  BOOLEAN_PROP
} from "../../../shared/constants";
import { emitEvent, registerTheme } from '../../../utils/mixins'

export default {
  name: "PieChart",
  mixins: [emitEvent('el'), registerTheme('chart')],
  props: {
    data: ARRAY_PROP(),
    colors: ARRAY_PROP(),
    option: OBJECT_PROP(),
    label: BOOLEAN_PROP(true),
    labelPosition: STRING_PROP('outside'),
    pieStyle: STRING_PROP("pizza"),
    radius: {
      type: [String, Array],
      default: '60%'
    },
    legend: BOOLEAN_PROP(false),
    legendPosition: STRING_PROP('bottom'),
    emphasisLabel: BOOLEAN_PROP(true),
    tooltip: BOOLEAN_PROP(true),
    animation: BOOLEAN_PROP(true),
    theme: STRING_PROP('walden')

  },
  data() {
    return {
      chart: null
    }
  },
  computed: {
    labelShow() {
      if(this.labelPosition === 'center') {
        return false
      }
      return this.label;
    },
    names() {
      return this.data.map(i => i.name)
    },
    options() {
      const { colors, option, pieStyle } = this;
      const isDonutStyle = pieStyle === "donut";
      const isRoseStyle = pieStyle === "rose";
      // options
      let options = {
        animation: this.animation,
        title: {
          text:this.title
        },
        grid: {
          containLabel: true
        },
        legend: {
          show: this.legend,
          top: this.legendPosition
        },
        tooltip: {
          show:this.tooltip,
          trigger: 'item'
        },
        series: [
          {
            type: "pie",
            radius: this.radius,
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: this.labelShow,
                position: this.labelPosition,
              },
              emphasis: {
                show: !!this.emphasisLabel,
                textStyle: {
                  fontSize: '24',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: true
              }
            },
            data: this.data
          }
        ]
      };
      isDonutStyle && this.setDonutstyle(options);
      isRoseStyle && this.setRoseStyle(options);

      return {
        ...options,
        ...option
      };
    }
  },
  methods: {
    setDonutstyle(options) {
      options.series[0].radius = ["50%", "70%"];
    },
    setRoseStyle(options) {
      options.series[0].roseType = "radius";
    }
  }
};
</script>

<style scoped>
.chart {
  width: 100%;
  height: 100%;
}
</style>
