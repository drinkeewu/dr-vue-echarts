# MapChart 地图

## 基础用法
<Common-DemoCode  code-slot="mapBase">
  <map-base/>
</Common-DemoCode>


::: slot mapBase
```vue
<template>
  <div class="size">
    <MapChart :data="mapData" :map-type="mapType" />
  </div>
</template>

<script>
export default {
  name: "MapBase",
  data() {
    return {
      mapType: "广东",
      mapData: [
        {
          name: "广州市",
          value: 888
        },
        {
          name: "佛山市",
          value: 666
        }
      ]
    };
  }
};
</script>

<style>
.size {
  width: 100%;
  height: 400px;
}
</style>
```
:::


## 属性 Attributes
<map-attributes/>
