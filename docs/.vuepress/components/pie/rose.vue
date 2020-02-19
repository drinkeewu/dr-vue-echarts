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
          value: 25,
        },
        {
          name: '深圳',
          value: 20,
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