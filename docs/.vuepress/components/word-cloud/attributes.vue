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
          name: "data",
          desc: '用于渲染的数据',
          type: 'string'
        },
        {
          name: "size-range",
          desc: '显示的元素大小(单位:px)范围',
          type: 'array',
          default: '[0, 100]'
        },
        {
          name: 'theme',
          type: 'string',
          desc: '颜色主题',
          default: 'walden',
          options: 'walden / purple-passion / westeros'
        },
        {
          name: "color-range",
          desc: '词云字体的随机颜色范围',
          type: 'array',
          default: "['#3fb1e3','#6be6c1','#626c91','#a0a7e6','#c4ebad','#96dee8']"
        },
        {
          name: 'draw-out-of-bound',
          desc: '是否允许绘制字体超出画布范围、字体重叠',
          type: 'boolean',
          default: 'false'
        }
      ]
    };
  }
};
</script>
