import vchart from "vue-echarts";

/**
 * Emit the all events of the ref VueComponent
 *
 * @param {String} refName The ref name string
 */
export const emitEvent = refName => ({
  mounted() {
    const el = this.$refs[refName];
    Object.keys(this.$listeners).forEach(event => {
      if (event.indexOf("zr:") === 0) {
        el.chart.on(event.slice(3), e => {
          this.$emit(event, e);
        });
      } else {
        el.chart.on(event, e => {
          this.$emit(event, e);
        });
      }
    });
  }
});

export const registerTheme = instanceName => ({

  watch: {
    theme: {
      immediate: true,
      handler(theme) {
        theme
          ? import(`../../theme/${theme}.json`).then(module => {
              vchart.registerTheme(theme, module.default);
              this[instanceName] = vchart;
            })
          : (this[instanceName] = vchart);
      }
    }
  }
});
