import WordCloud from './src/WordCloud.vue';
WordCloud.install = function (Vue) {
  Vue.component(WordCloud.name, WordCloud)
}

export default WordCloud;
