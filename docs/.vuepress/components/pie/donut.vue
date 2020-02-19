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
