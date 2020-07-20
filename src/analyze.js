function analyze(arr) {
  function average(arr) {
    return arr.reduce((acc, value) => acc + value, 0) / arr.length;
  }

  function min(arr) {
    return Math.min.apply(null, arr);
  }
  function max(arr) {
    return Math.max.apply(null, arr);
  }
  function length(arr) {
    return arr.length;
  }

  return {
    average: average(arr),
    min: min(arr),
    max: max(arr),
    length: length(arr),
  };
}

export default analyze;
