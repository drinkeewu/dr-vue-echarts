/* eslint-disable no-use-before-define */


/**
 * Get all labels of the data
 *
 * @param {array} param
 * @returns
 */
function getAllLabels(param) {
  const results = [];
  param.forEach((item) => {
    item.data && item.data.forEach((dataItem) => {
      dataItem && results.push(dataItem.label);
    });
  });
  return [...new Set(results)];
}

/**
 * Get all the values of name by traverse the origin data
 *
 * @param {*} name name of the data
 * @param {*} data the origin income data
 * @example
 * ```
 *getValuesOfName('data1', [{
    name: 'data1',
    data: [{value: 123, label: 'label1'}]
  }])
 * ```
 * @returns
 */
function getValuesOfName(name, data) {
  function getValueOfLabel(label, list) {
    const match = list.find(item => item.label === label);
    return match ? match.value : 0;
  }
  function getDataOfName(_name, _data) {
    const match = _data.find(i => i.name === _name);
    return match ? match.data : [];
  }
  const labels = getAllLabels(data);
  const dataOfName = getDataOfName(name, data);
  const result = [];
  labels.forEach((label) => {
    result.push(getValueOfLabel(label, dataOfName));
  });
  return result;
}

/**
 * bar / line chart formatter func
 *
 * @param {array} data
 * @param {string} chartType
 * @returns
 */
function linear(data, chartType) {
  const DEFAULT_CHART_TYPE = 'bar';

  const names = data.map(i => i.name);
  const labels = getAllLabels(data);


  const seriesData = names.map(name => ({
    type: chartType || DEFAULT_CHART_TYPE,
    name,
    label: labels,
    data: getValuesOfName(name, data),
  }));

  return {
    seriesData,
    names,
    labels,
  };
}


export default linear;
