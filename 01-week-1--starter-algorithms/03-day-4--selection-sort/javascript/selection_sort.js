function selectionSort(arr) {
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

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  console.log("Expecting: [-1, 3, 5, 5, 6]");
  console.log("=>", selectionSort([3, -1, 5, 6, 5]));

  console.log("");

  console.log("Expecting: [-6, -5, -5, -3, -1]");
  console.log("=>", selectionSort([-3, -1, -5, -6, -5]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const startTime = Date.now();
  let shortInput = [];
  let longInput = [];

  for (let i = 0; i < 3; ++i) {
    shortInput.push(Math.random());
    longInput.push(Math.random());
  }

  for (let i = 0; i < 100; ++i) {
    shortInput.push(Math.random());
    longInput.push(Math.random());
  }

  for (let i = 0; i < 1000; i++) {
    selectionSort(shortInput);
    selectionSort(longInput);
  }

  let endTime = Date.now();
  let runtime = endTime - startTime;

  console.log(`Runtime: ${runtime} millisecond(s)`);
  console.log(`Average runtime: ${runtime / 2000} millisecond(s)`);
}

module.exports = selectionSort;

// Please add your pseudocode to this file
/*
- Use Math.min() to find the lowest value in input array
- Remove that value and push it onto an output array
- Continue the process for each element in input array
- Return output array
*/

// And a written explanation of your solution
/*
Runs a loop once for every element of the input array in which the lowest value is removed from the input array and pushed onto the output array, which is returned.
*/
