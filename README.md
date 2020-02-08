# dr-vue-echarts
[![NPM version](https://badge.fury.io/js/dr-vue-echarts.svg)](https://www.npmjs.com/package/dr-vue-echarts)


A echarts library in Vue.js


## Usage
**Example**

install
```node
npm install dr-vue-echarts
```

to start
```js
//js

import { WordCloudChart } from 'dr-vue-echarts'

export default {
  //...
  components: {
    WordCloudChart
  },
  data: [
    { name: 'word1', value : 10 },
    { name: 'word2', value : 15 }
  ]
}
```

```html
// html

<template>
  <WordCloudChart :data="data"/>
</template>
```
