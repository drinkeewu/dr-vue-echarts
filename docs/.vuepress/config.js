module.exports = {
  title: 'dr-vue-echarts',
  base: '/dr-vue-echarts/',
  description: '基于Vue.js、Echarts的图表组件库',
  themeConfig: {
    nav: [
      {text: '教程', link: '/usage/'},
      {text: 'Github', link: 'https://github.com/drinkeewu/dr-vue-echarts'},
    ],
    sidebar:[
      {
        title: '开发指南',
        collapsable:false,
        children:[
          '/usage/'
        ]
      },
      {
        title: '组件',
        collapsable:false,
        children: [
          '/charts/bar',
          '/charts/pie',
          '/charts/word-cloud',
          '/charts/map',
        ]
      }
    ]
  }
}