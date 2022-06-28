function selectionSortRecursive(arr) {
  if (arr.length === 0) {
    return arr;
  }

  const min = Math.min(...arr);
  arr.splice(arr.indexOf(min), 1);

  let result = selectionSortRecursive(arr);
  result.unshift(min);
  return result;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

  console.log("");

  console.log("Expecting: [-1, 3, 5, 5, 6]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 6, 5]));

  console.log("");

  console.log("Expecting: [-6, -5, -5, -3, -1]");
  console.log("=>", selectionSortRecursive([-3, -1, -5, -6, -5]));

  console.log("");
}

module.exports = selectionSortRecursive;

// Please add your pseudocode to this file
/*
Base case: Return arr if arr.length === 0.
= find the min of arr
= find the index of min
- delete min from arr
- call the function
- add min to beginning of array returned by function call
- return the modified array
*/

// And a written explanation of your solution
/*
Each step finds and removes the smallest element element from the array and returns an array returned from a recursive cal with that element at the beginning. When all elements have been removed from the original array, execution ends.
*/
