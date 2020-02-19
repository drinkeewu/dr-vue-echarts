<template>
  <div class="chart">
    <BarChart  
      :data="data"
      x-name="时间"
      y-name="人数"
    />
  </div>
</template>

<script>
export default {
  name: "BarBase",
  data() {
    return {
      data: [
        {
          name: "学生人数",
          data: [
            {
              label: "2018",
              value: 45
            },
            {
              label: "2019",
              value: 60
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
