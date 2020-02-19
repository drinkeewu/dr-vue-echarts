<template>
  <div class="chart">
    <bar-chart :data="data" />
  </div>
</template>

<script>
export default {
  name: "BarMultiData",
  data() {
    return {
      data: [
        {
          name: "教师人数",
          data: [
            { label: "2018", value: 190 },
            { label: "2019", value: 200 }
          ]
        },
        {
          name: "学生人数",
          data: [
            { label: "2018", value: 340 },
            { label: "2019", value: 173 }
          ]
        }
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
