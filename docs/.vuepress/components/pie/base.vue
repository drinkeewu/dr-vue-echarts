<template>
  <div class="chart">
    <PieChart :data="data"/>
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

<style scoped>
.chart {
  width: 100%;
  height: 300px;
}
</style>