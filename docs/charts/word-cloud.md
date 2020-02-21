# WordCloudChart 词云

## 基础用法
<Common-DemoCode  code-slot="wordCloudBase">
  <word-cloud-base/>
</Common-DemoCode>

::: slot wordCloudBase

```vue
<template>
  <div class="chart">
      <component 
        v-if="chart" 
        :is="chart" 
        :data="wordCloudData"
        
      />
  </div>
</template>

<script>
import { importWordCloud } from '../../mixins'
export default {
  name: 'Base',
  mixins: [importWordCloud('chart')],
  data() {
    return {
      wordCloudData: Array.from({length: 100}, (v, i) => ({
        name: `测试${i+1}`,
        value: 10+i
      })),
      chart: null
    }
  },
  
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
<word-cloud-attributes/>
