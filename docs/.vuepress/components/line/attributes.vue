<template>
  <attr-table :data="data" />
</template>

<script>
export default {
  name: "BarAttributes",
  data() {
    return {
      data: [
        {
          name: "option",
          type: "object",
          desc: "传入<code>echarts</code>的全局option, 用于覆盖配置"
        },
        {
          name: "animation",
          type: "boolean",
          desc: "是否开启动, 数据太大时, 可以关闭动画以提升性能",
          default: "true"
        },
        {
          name: "theme",
          type: "string",
          desc: "颜色主题",
          default: "walden",
          options: "walden / purple-passion / westeros"
        },
        {
          name: "data",
          type: "array",
          desc: "用于渲染的数据"
        },
        {
          name: "width",
          type: "string",
          desc: "图表的宽度",
          default: "100%"
        },
        {
          name: "height",
          type: "string",
          desc: "图表的高度",
          default: "100%"
        },
        {
          name: "title",
          type: "string",
          desc: "图表的标题"
        },
        {
          name: "x-name",
          type: "string",
          desc: "x轴的名称"
        },
        {
          name: "y-name",
          type: "string",
          desc: "y轴的名称"
        },
        {
          name: "legend",
          type: "boolean",
          desc: "<code>echarts</code>图例标记是否显示",
          default: true
        },
        {
          name: "colors",
          type: "array",
          desc: "主题颜色列表"
        },
        {
          name: "zoom",
          type: "boolean",
          desc: "是否显示缩放组件",
          default: false
        },
        {
          name: "zoom-range",
          type: "array",
          desc: "默认缩放范围",
          default: "[0, 100]"
        },
        {
          name: "rainbow",
          type: "boolean",
          desc: "统一类型数据是否显示不同的颜色",
          default: false
        },
        {
          name: "horizontal",
          type: "boolean",
          desc: "是否显示为水平柱状图",
          default: "false"
        },

        {
          name: "grid",
          type: "object",
          desc: "<code>echarts</code>直角坐标系内绘图网格"
        },
        {
          name: "label-rotate",
          type: "boolean",
          desc: "x轴标题是否旋转",
          default: false
        },
        {
          name: "label-rotate-deg",
          type: "number",
          desc: "x轴标题旋转角度",
          default: "40"
        },
        {
          name: "bar-max-width",
          type: "string",
          desc:
            "柱条的最大宽度。可以是绝对值例如 <code>40</code> 或者百分数例如 <code>60%</code>。百分数基于自动计算出的每一类目的宽度。",
          default: "100%"
        },
        {
          name: "smooth",
          desc: "是否显示光滑曲线",
          default: "false",
          type: "boolean"
        },
        {
          name: "area",
          desc: "是否填充折线图区域",
          type: 'boolean',
          default: 'false'
        }
      ]
    };
  }
};
</script>

<style></style>
