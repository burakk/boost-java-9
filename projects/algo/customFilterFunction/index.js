/* Custom Fİlter Function Using Callback */

function customFilter(arr, test) {
  const filteredArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (test(arr[i])) {
      rVal.push(arr[i]);
    }
  }

  return filteredArr;
}

const oddNums = customFilter([1, 3, 6, 7], (num) => num % 2 !== 0);
const greaterThan4 = customFilter([1, 3, 6, 7], (num) => num > 4);
const hasXArr = customFilter(["xdf", "cfg", "abc", "xfg"], (str) =>
  str.include("x")
);
