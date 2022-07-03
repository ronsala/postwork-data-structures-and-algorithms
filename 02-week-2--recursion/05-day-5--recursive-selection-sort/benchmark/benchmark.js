// Paste your iterative and recursive solutions in this file
// And then calculate their average run times to compare them.

const arr = [3, -1, 5, 2];

function selectionSort() {
  let output = [];
  let length = arr.length;

  for (let i=0; i < length; i++) {
    let lowest = Math.min(...arr);
    let index = arr.indexOf(lowest);
    arr.splice(index, 1);
    output.push(lowest);
  }

  return output;
}

function selectionSortRecursive() {
  if (arr.length === 0) {
    return arr;
  }

  const min = Math.min(...arr);
  arr.splice(arr.indexOf(min), 1);

  let result = selectionSortRecursive(arr);
  result.unshift(min);
  return result;
}

function benchmark(callback) {
  const startTime = Date.now();

  for (let i = 0; i < 100000000; ++i) {
    callback(arr);
  }

  return (Date.now() - startTime) / 100000000;
}

console.log(benchmark(selectionSort))

console.log(benchmark(selectionSortRecursive))