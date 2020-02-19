# BarChart 柱状图

[[toc]]

## 基础用法

<Common-DemoCode code-slot="barBase">
  <bar-base></bar-base>
</Common-DemoCode>

::: slot barBase
```vue
<template>
  <div class="chart">
    <BarChart  
      :data="data"
      x-name="时间"
      y-name="人数"
    />
  </div>
</template>

<script>
export default {
  name: "BarBase",
  data() {
    return {
      data: [
        {
          name: "学生人数",
          data: [
            {
              label: "2018",
              value: 45
            },
            {
              label: "2019",
              value: 60
            }
          ]
        }
      ]
    };
  }
};
</script>

<style>
.chart {
  width: 100%;
  height: 300px;
}
</style>

```
:::

## 标题倾斜
<Common-DemoCode code-slot="barLabelRotate">
  <bar-label-rotate/>
  <div slot="tips">
  当属数据量较多时, 横坐标的标题会可能因为挤压而显示不全。此时可设置<code>label-rotate</code>属性为<code>true</code>,让标题倾斜。
  </div>
</Common-DemoCode>

::: slot barLabelRotate
```vue {5}
<template>
  <div class="chart">
    <bar-chart
      :data="data"
      label-rotate
     />
  </div>
</template>

<script>
export default {
  name: "BarLabelRotate",
  data() {
    return {
      data: [
        {
          name: "学生人数",
          data: [
            { label: '2010', value: 8 },
            { label: '2011', value: 10 },
            { label: '2012', value: 12 },
            { label: '2013', value: 7 },
            { label: '2014', value: 9 },
            { label: '2015', value: 16 },
            { label: '2016', value: 15 },
            { label: '2017', value: 18 },
            { label: '2018', value: 20 },
            { label: '2019', value: 5 },
            { label: '2020', value: 9 },
          ]
        }
      ]
    };
  }
};
</script>

<style>
.chart {
  width: 100%;
  height: 300px;
}
</style>

```
:::

## 拖动缩放
<Common-DemoCode  code-slot="barZoom">
  <bar-zoom/>
  <div slot="tips">
  设置<code>zoom</code>属性为<code>true</code>, 显示拖动缩放工具栏。还可以传入<code>zoom-range</code>属性, 设置默认显示范围。
  </div>
</Common-DemoCode>

::: slot barZoom
```vue {6}
<template>
<div>
  <div class="chart">
    <bar-chart
      :data="data"
      label-rotate
      zoom
     />
  </div>
  
  <div class="chart">
    <bar-chart
      :data="data"
      label-rotate
      zoom
      :zoom-range="[20, 80]"
    />
  </div>
</div>
</template>

<script>
export default {
  name: "BarLabelRotate",
  data() {
    return {
      data: [
        {
          name: "学生人数",
          data: [
            { label: '2010', value: 8 },
            { label: '2011', value: 10 },
            { label: '2012', value: 12 },
            { label: '2013', value: 7 },
            { label: '2014', value: 9 },
            { label: '2015', value: 16 },
            { label: '2016', value: 15 },
            { label: '2017', value: 18 },
            { label: '2018', value: 20 },
            { label: '2019', value: 5 },
            { label: '2020', value: 9 },
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
.chart {
  width: 100%;
  height: 300px;
}
</style>
```
:::

## 多个类型的数据
<Common-DemoCode  code-slot="barMultiTypeData">
  <bar-multi-type-data/>
</Common-DemoCode>

:::slot barMultiTypeData
```vue 
<template>
  <div class="chart">
    <bar-chart :data="data" />
  </div>
</template>

<script>
export default {
  name: "BarMultiData",
  data() {
    return {
      data: [
        {
          name: "教师人数",
          data: [
            { label: "2018", value: 190 },
            { label: "2019", value: 200 }
          ]
        },
        {
          name: "学生人数",
          data: [
            { label: "2018", value: 340 },
            { label: "2019", value: 173 }
          ]
        }
      ]
    };
  }
};
</script>

<style>
.chart {
  width: 100%;
  height: 300px;
}
</style>

```
:::

## 水平柱状图
<Common-DemoCode code-slot="barHorizontal">
  <bar-horizontal/>
  <div slot="tips">
  设置<code>horizontal</code>为<code>true</code>, 显示水平柱状图。
  </div>
</Common-DemoCode>

::: slot barHorizontal
```vue {5}
<template>
  <div class="chart">
    <bar-chart
      :data="data"
      horizontal
      zoom
      y-name="年份"
      x-name="人数"
     />
  </div>
</template>

<script>
export default {
  name: "BarLabelRotate",
  data() {
    return {
      data: [
        {
          name: "学生人数",
          data: [
            { label: '2010', value: 8 },
            { label: '2011', value: 10 },
            { label: '2012', value: 12 },
            { label: '2013', value: 7 },
            { label: '2014', value: 9 },
            { label: '2015', value: 16 },
            { label: '2016', value: 15 },
            { label: '2017', value: 18 },
            { label: '2018', value: 20 },
            { label: '2019', value: 5 },
            { label: '2020', value: 9 },
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
.chart {
  width: 100%;
  height: 300px;
}
</style>

```
:::

## 彩色柱状图
<Common-DemoCode code-slot="barRainbow">
  <bar-rainbow/>
  <div slot="tips">
  设置<code>rainbow</code>属性为<code>true</code>, 可以使同一数据显示不同颜色的柱状图
  </div>
</Common-DemoCode>

::: slot barRainbow
```vue {6}
<template>
  <div class="chart">
    <bar-chart
      :data="data"
      label-rotate
      rainbow
      x-name="年份"
      y-name="人数"
     />
  </div>
</template>

<script>
export default {
  name: "BarLabelRotate",
  data() {
    return {
      data: [
        {
          name: "学生人数",
          data: [
            { label: '2010', value: 8 },
            { label: '2011', value: 10 },
            { label: '2012', value: 12 },
            { label: '2013', value: 7 },
            { label: '2014', value: 9 },
            { label: '2015', value: 16 },
            { label: '2016', value: 15 },
            { label: '2017', value: 18 },
            { label: '2018', value: 20 },
            { label: '2019', value: 5 },
            { label: '2020', value: 9 },
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
.chart {
  width: 100%;
  height: 300px;
}
</style>

```
:::

## 属性 Attributes
<bar-attributes/>