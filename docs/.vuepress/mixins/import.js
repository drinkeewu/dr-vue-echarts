export const importWordCloud = (refName) => ({
  mounted() {
    import ('../../../packages/word-cloud').then(module => {
      this[refName] = module.default
    })
  }
})