<template>
  <attr-table :data="data" />
</template>

<script>
export default {
  name: "PieAttrs",
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
          name: "data",
          type: "array",
          desc: "用户渲染的数据"
        },
        {
          name: "colors",
          type: "array",
          desc: "主题颜色列表"
        },
        {
          name: "label",
          type: "boolean",
          desc: "是否显示标题",
          default: "true"
        },
        {
          name: "label-position",
          type: "string",
          desc: "标题的位置",
          default: "outside",
          options: "outside / inside / inner / center"
        },
        {
          name: "pie-style",
          type: "string",
          desc: "饼图风格",
          default: "pizza",
          options: "pizza / donut / rose"
        },
        {
          name: "radius",
          type: "string / array",
          desc: "饼图的半径",
          default: "60%"
        },
        {
          name: "legend",
          type: "boolean",
          default: "false",
          desc: "<code>echarts</code>图例标记是否显示"
        },
        {
          name: "tooltip",
          type: "boolean",
          desc: "是否显示i提示框组件",
          defaut: "true"
        },
        {
          name: "legend-position",
          type: "string",
          desc: "图例标记位置",
          default: "bottom",
          options: "top/middle/bottom"
        },
        {
          name: "emphasis-label",
          type: "boolean",
          desc: "高亮状态下是否显示标题",
          default: "true"
        }
      ]
    };
  }
};
</script>

<style></style>
