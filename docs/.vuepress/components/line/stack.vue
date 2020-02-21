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
