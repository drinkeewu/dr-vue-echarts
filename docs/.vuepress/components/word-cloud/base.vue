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

