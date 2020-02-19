<template>
  <div class="chart">
      <component v-if="chart" :is="chart" :data="wordCloudData"/>
  </div>
</template>

<script>
import { importWordCloud } from '../../mixins'
export default {
  name: 'Base',
  mixins: [importWordCloud('chart')],
  data() {
    return {
      wordCloudData: [
        { name: '测试1', value: 100 },
        { name: '测试2', value: 100 },
        { name: '测试3', value: 100 },
      ],
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

