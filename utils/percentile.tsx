// Returns the value at a given percentile in a sorted numeric array;
export function calcPercentile(arrayNumber: Array<number>, percentile: number){
  // Sort the array
  let arr = sortArr(arrayNumber);
  if (arr.length === 0) return 0;
  if (percentile <= 0) return arr[0];

  // Turn percentile into a decimal (e.g. 80 becomes 0.85)
  percentile = percentile/100;

  // Work out the position in the array of the percentile point
  let index = (arr.length - 1) * percentile;
  let lower = Math.floor(index);
  let upper = lower + 1;
  let weight = index - lower;


  if (upper >= arr.length) return arr[lower];
  let value = arr[lower] + weight * ((arr[upper]) - (arr[lower]));
  return parseFloat(value.toFixed(1))
}

export function sortArr(arr: Array<number>){
  var ary = arr.slice();
  ary.sort(function(a :number, b: number){ return a - b;});
  return ary;
}
