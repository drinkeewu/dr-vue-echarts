# LineChart 折线图

[[toc]]

## 基础用法

<Common-DemoCode code-slot="lineBase">
  <line-base/>    
</Common-DemoCode>

::: slot lineBase

```vue
<template>
  <div class="chart">
    <line-chart :data="data" />
  </div>
</template>

<script>
export default {
  name: "LineBase",
  data() {
    return {
      data: [
        {
          name: "收入",
          data: [
            {
              label: "2016",
              value: 84000
            },
            {
              label: "2017",
              value: 90000
            },
            {
              label: "2018",
              value: 80000
            },
            {
              label: "2019",
              value: 100000
            }
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

## 光滑曲线

<Common-DemoCode code-slot="lineSmooth">
  <line-smooth/>
  <div slot="tips">
  设置<code>smooth</code>属性为<code>true</code>,  显示光滑曲线
  </div>
</Common-DemoCode>

::: slot lineSmooth
```vue {5}
<template>
  <div class="chart">
    <line-chart 
      :data="data" 
      smooth 
    />
  </div>
</template>

<script>
export default {
  name: "LineBase",
  data() {
    return {
      data: [
        {
          name: "收入",
          data: [
            {
              label: "2016",
              value: 84000
            },
            {
              label: "2017",
              value: 90000
            },
            {
              label: "2018",
              value: 80000
            },
            {
              label: "2019",
              value: 100000
            }
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

## 填充颜色
<Common-DemoCode code-slot="lineArea">
  <line-area/>
   <div slot="tips">
    设置<code>area</code>属性为<code>true</code>,  填充折线区域颜色
  </div>
</Common-DemoCode>

::: slot lineArea
```vue {5}
<template>
  <div class="chart">
    <line-chart 
      :data="data" 
      area 
    />
  </div>
</template>

<script>
export default {
  name: "LineBase",
  data() {
    return {
      data: [
        {
          name: "收入",
          data: [
            {
              label: "2016",
              value: 84000
            },
            {
              label: "2017",
              value: 90000
            },
            {
              label: "2018",
              value: 80000
            },
            {
              label: "2019",
              value: 100000
            }
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

## 堆叠区域图
<Common-DemoCode code-slot="lineStack">
  <line-stack/>
</Common-DemoCode>

::: slot lineStack
```vue 
<template>
  <div class="chart">
    <line-chart :data="data" area />
  </div>
</template>

<script>
export default {
  name: "LineStack",
  data() {
    return {
      data: [
        {
          name: "收入",
          data: [
            { label: "2016", value: 1040000 },
            { label: "2017", value: 1200000 },
            { label: "2018", value: 1800000 },
            { label: "2019", value: 2000000 }
          ]
        },
        {
          name: "支出",
          data: [
            { label: "2016", value: 540000 },
            { label: "2017", value: 400000 },
            { label: "2018", value: 600000 },
            { label: "2019", value: 700000 }
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
<line-attributes/>
