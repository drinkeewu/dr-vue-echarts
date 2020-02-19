# PieChart 饼图

[[toc]]

## 基础用法
<Common-DemoCode  code-slot="pieBase">
  <pie-base/>
</Common-DemoCode>

:::slot pieBase
```vue
<template>
  <div class="chart">
    <pie-chart :data="data"/>
  </div>
</template>

<script>
export default {
  name: 'PieBase',
  data() {
    return {
      data: [
        {
          name: '广州',
          value: 30,
        },
        {
          name: '佛山',
          value: 15,
        },
        {
          name: '深圳',
          value: 8,
        },
      ],
    }
  }
}
</script>

<style>
.chart {
  width: 100%;
  height: 300px;
}
</style>
```
:::

## Donut风格
<Common-DemoCode  code-slot="dont">
  <pie-donut/>
  <div slot="tips">
    默认情况下, PieChart组件的<code>pie-style</code>为<code>pizze</code>, 设置<code>pie-style</code>为<code>donut</code>显示<strong>Donut</strong>风格饼图
  </div>
 
</Common-DemoCode>



:::slot dont
```vue {6}
<template>
  <div>
    <div class="chart">
      <pie-chart 
        :data="data" 
        pie-style="donut" 
      />
    </div>
    <div class="chart">
      <pie-chart 
        :data="data" 
        pie-style="donut"
        label-position="center"
        legend
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "PieDonut",
  data() {
    return {
      data: [
        {
          name: "广州",
          value: 30
        },
        {
          name: "佛山",
          value: 15
        },
        {
          name: "深圳",
          value: 8
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

## Rose风格
<Common-DemoCode  code-slot="pieRose">
  <pie-rose/>
</Common-DemoCode>

::: slot pieRose
```vue {5}
<template>
  <div class="chart">
    <pie-chart
      :data="data"
      pie-style="rose"
    />
  </div>
</template>

<script>
export default {
  name: 'PieRose',
  data() {
    return {
        data: [
        {
          name: '广州',
          value: 30,
        },
        {
          name: '佛山',
          value: 15,
        },
        {
          name: '深圳',
          value: 8,
        },
      ],
    }
  }
}
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
<pie-attributes/>

