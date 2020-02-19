<template>
  <div class="chart">
    <bar-chart
      :data="data"
      label-rotate
      rainbow
      x-name="年份"
      y-name="人数"
     />
  </div>
</template>

<script>
export default {
  name: "BarLabelRotate",
  data() {
    return {
      data: [
        {
          name: "学生人数",
          data: [
            { label: '2010', value: 8 },
            { label: '2011', value: 10 },
            { label: '2012', value: 12 },
            { label: '2013', value: 7 },
            { label: '2014', value: 9 },
            { label: '2015', value: 16 },
            { label: '2016', value: 15 },
            { label: '2017', value: 18 },
            { label: '2018', value: 20 },
            { label: '2019', value: 5 },
            { label: '2020', value: 9 },
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
