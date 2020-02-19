/**
 *
 * Vue default prop of Array
 * @param {Array} [init=[]]
 * @returns {Array}
 */
export const ARRAY_PROP = (init = []) => ({
  type: Array,
  default() {
    return init;
  },
});

/**
 *
 * Vue default prop of Object
 * @param {Object} [init={}]
 * @returns {Object}
 */
export const OBJECT_PROP = (init = {}) => ({
  type: Object,
  default() {
    return init;
  },
});

/**
 *
 * Vue default prop of String
 * @param {String} [init='']
 * @returns {String}
 */
export const STRING_PROP = (init = '') => ({
  type: String,
  default: init,
});

/**
 *
 * Vue default prop of Boolean
 * @param {Boolean} [init=false]
 * @returns {Boolean}
 */
export const BOOLEAN_PROP = (init = false) => ({
  type: Boolean,
  default: init
})

/**
 *
 * Vue default prop of Number
 * @param {Number} [init=NaN]
 * @returns {Number}
 */
export const NUMBER_PROP = (init = NaN) => ({
  type: Number,
  default: init
})