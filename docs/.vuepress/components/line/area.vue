<template>
  <div class="chart">
    <line-chart :data="data" area />
  </div>
</template>

<script>
export default {
  name: "LineArea",
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
