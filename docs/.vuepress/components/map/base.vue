<template>
  <div class="map">
    <MapChart
      :data="mapData"
      :map-type="mapType"
    />
  </div>
</template>

<script>
export default {
  name: 'MapBase',
  data() {
    return {
      mapType: '广东',
      mapData: [
        {
          name: '广州市',
          value: 888,
        },
        {
          name: '佛山市',
          value: 666
        }
      ],
    }
  }
}
</script>

<style scoped>
.map {
  width: 100%;
  height: 400px;
}

</style>