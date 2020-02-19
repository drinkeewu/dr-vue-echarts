# WordCloudChart 词云

## 基础用法
<Common-DemoCode  code-slot="wordCloudBase">
  <word-cloud-base/>
</Common-DemoCode>

::: slot wordCloudBase

```vue
<template>
  <div class="chart">
    <WordCloudChart :data="wordCloudData"/>
  </div>
</template>

<script>
export default {
  name: "Base",
  data() {
    return {
      wordCloudData: [
        { name: "测试1", value: 100 },
        { name: "测试2", value: 100 },
        { name: "测试3", value: 100 }
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
