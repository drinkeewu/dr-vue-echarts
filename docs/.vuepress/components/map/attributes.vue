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
          default: 'true'
        },
        {
          name: 'theme',
          type: 'string',
          desc: '颜色主题',
          default: 'walden',
          options: 'walden / purple-passion / westeros'
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
          name: "map-type",
          desc: '地图地区名称',
          type: 'string',
          default: 'china'
        },
        {
          name: "title-color",
          desc: '标题颜色',
          type: 'string',
          default: '#000000'
        },
        {
          name: "title-position",
          desc: '标题位置',
          type: 'string',
          default: 'center'
        },
        {
          name: "area-color",
          desc: '区域填充颜色',
          type: 'string',
          default: '#eaeaea'
        },
        {
          name: "border-color",
          desc: '区块边框颜色',
          type: 'string',
          default: '#999999'
        },
      
        {
          name: "name",
          desc: '数据名称',
          type: 'string'
        }
      ]
    };
  }
};
</script>

