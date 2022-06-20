function recursiveSearch(arr, target) {
  if (target === arr[0]) {
    return true;
  }

  if (arr.length < 2) {
    return false
  }

  arr = arr.slice(1)

  return recursiveSearch(arr, target);
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", recursiveSearch([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", recursiveSearch([3, 2, 1], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", recursiveSearch(['lion', 'tiger', 'zebra'], 'zebra'));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", recursiveSearch(['Harry', 'Ron'], 'Luna'));
}

module.exports = recursiveSearch;

// Please add your pseudocode to this file
/*
The function should return true if the array contains the target value, otherwise false.

- Base cases: Target found or last element checked without match.
- Each recursion, compare the first element to the target then, if they match, return true, otherwise, remove it from the array.
- If the array is empty or reduced to one element without a match, return false.
*/

// And a written explanation of your solution
/*
Function checks one element of array against target each time it's called. If, during an execution, a conditional is not satisfied to return true or false, the first element is removed from the array and the function called again.
*/
