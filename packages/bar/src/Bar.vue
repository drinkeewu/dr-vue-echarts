<template>
  <vchart
    ref="el"
    :style="style"
    autoresize
    :theme="theme"
    :options="options"
    v-bind="$attrs"
  />
</template>

<script>
import vchart from "../../../components/vchart";
import { bar } from "../../../utils/formatter";
import { DEFAULT_COLORS } from "../../../theme";
import { emitEvent } from "../../../utils/mixins";
import flattenDeep from 'lodash/flattenDeep'
import {
  ARRAY_PROP,
  OBJECT_PROP,
  STRING_PROP,
  BOOLEAN_PROP,
  NUMBER_PROP
} from "../../../shared/constants";

const INIT_GRID_LEFT = 10;
const INIT_GRID_RIGHT = 0;
export default {
  name: "BarChart",
  mixins: [emitEvent("el")],
  components: {
    vchart
  },
  props: {
    option: OBJECT_PROP({}),
    animation: BOOLEAN_PROP(true),
    theme: STRING_PROP("walden"),
    data: ARRAY_PROP([]),
    width: STRING_PROP("100%"),
    height: STRING_PROP("100%"),
    title: STRING_PROP(),
    xName: STRING_PROP(),
    yName: STRING_PROP(),
    legend: BOOLEAN_PROP(true),
    colors: ARRAY_PROP(),
    zoom: BOOLEAN_PROP(false),
    /** 同一类型数据每个柱状图颜色是否不相同 */
    rainbow: BOOLEAN_PROP(false),
    /** 水平柱状图 */
    horizontal: BOOLEAN_PROP(false),
    /** 默认缩放范围 */
    zoomRange: ARRAY_PROP([0, 100]),
    /** 图表布局设置 */
    grid: OBJECT_PROP(),
    labelRotate: BOOLEAN_PROP(false),
    labelRotateDeg: NUMBER_PROP(40),
    barMaxWidth: STRING_PROP('100%')
  },
  computed: {
    style() {
      const { width, height } = this;
      return {
        width,
        height
      };
    },
    legendShow() {
      if(this.rainbow) {
        return false
      }
      return this.legend
    },
    gridLeft() {
      const labelMaxLength = this.getDataLabelMaxLength();
      if (this.horizontal) {
        let leftGap = labelMaxLength * 3 + 10;
        this.zoom && (leftGap += 50);
        return leftGap;
      } else {
        let valueDistance = this.getDataMaxValueLength() * 5;
        return this.yName ? valueDistance + 10 : valueDistance;
      }
    },
    gridRight() {
      return this.xName ? this.xName.length * 12 + 20 : INIT_GRID_RIGHT;
    },
    yAxisNameLocation() {
      return this.horizontal ? "end" : "middle";
    },
    yAxisNameGap() {
      if (this.horizontal) {
        return 10;
      }
      return this.getDataMaxValueLength() * 10 + 10;
    },
    options() {
      const { seriesData, labels, names, colors } = this.getData();
      this.rainbow && this.setRainbow(seriesData);
      seriesData.forEach(item => {
        item.barMaxWidth = this.barMaxWidth
      })
      let options = {
        animation: this.animation,
        color: colors && colors.length > 0 ? colors : DEFAULT_COLORS,
        grid: {
          containLabel: true,
          bottom: 10,
          left: this.gridLeft,
          right: this.gridRight
        },
        xAxis: {
          name: this.xName,
          type: this.horizontal ? "value" : "category",
          data: labels,
          splitLine: {
            show: this.horizontal,
            lineStyle: {
              type: "dashed"
            }
          }
        },
        yAxis: {
          name: this.horizontal
            ? this.yName
            : this.yName && this.yName.split("").join("\n"),
          nameLocation: this.yAxisNameLocation,
          nameRotate: 0.1,
          nameGap: this.yAxisNameGap,
          type: this.horizontal ? "category" : "value",
          data: labels,

          splitLine: {
            show: !this.horizontal,
            lineStyle: {
              type: "dashed"
            }
          }
        },
        legend: {
          show: this.legendShow,
          data: names,
          type: "scroll",
          width: "70%",
          right: "10px"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            animation: false,
            label: {
              backgroundColor: "#717b97"
            }
          }
        },
        series: seriesData
      };

      this.labelRotate && this.setxNameRotate(options);
      this.zoom && this.setZoom(options);

      return {
        ...options,
        ...this.option
      };
    }
  },
  methods: {
    getData() {
      return bar(this.data);
    },
    getDataLabelMaxLength() {
      const { labels } = this.getData();
      return Math.max(...labels.map(i => i.length));
    },
    getDataMaxValueLength() {
      const { seriesData } = this.getData();
      const allData = flattenDeep(seriesData.map(item => item.data))
      return `${Math.max(...allData)}`.length;
    },
    setxNameRotate(options) {
      options.xAxis.axisLabel = {
        ...options.xAxis.axisLabel,
        interval: 0,
        rotate: this.labelRotateDeg
      };
    },
    setRainbow(seriesData) {
      seriesData.forEach(item => {
        item.itemStyle = {
          normal: {
            color: params => {
              const colors =
                this.colors.length > 0 ? this.colors : DEFAULT_COLORS;
              const index = params.dataIndex % colors.length;
              return colors[index];
            }
          }
        };
      });
    },

    setZoom(options) {
      let slider = {
        type: "slider",
        bottom: 0
      };
      this.horizontal &&
        (slider = {
          ...slider,
          yAxisIndex: 0,
          top: 30,
          bottom: 30,
          left: 20
        });
      options.dataZoom = [
        {
          disabled: this.horizontal,
          type: "inside",
          start: this.zoomRange[0] || 0,
          end: this.zoomRange[1] || 100
        },
        {
          ...slider
        }
      ];
      options.grid = {
        ...options.grid,
        bottom: 40
      };
    }
  }
};
</script>
