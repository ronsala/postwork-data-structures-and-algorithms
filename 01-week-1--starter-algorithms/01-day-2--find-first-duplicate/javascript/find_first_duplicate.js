function findFirstDuplicate(arr) {
  for (let index = 0; index < arr.length; index++) {
    let previous = arr.slice(0, index)
    if(previous.includes(arr[index])) return arr[index]
  }
  return -1
}

if (require.main === module) {
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([222222222222222222222223n]));

  console.log("");

  console.log("Expecting: 5");
  console.log("=>", findFirstDuplicate([5, 4, 5]));

  console.log("");

  console.log("Expecting: 4");
  console.log("=>", findFirstDuplicate([5, 4, 3, 4, 5]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
/*
- Loop thru each element, creating an array of previous elements in the array.
- If the array of previous elements includes the element at the current index, return it, if not, return -1.
*/

// And a written explanation of your solution
/*
I need to return the first value that recurs, or if none do, -1.

I loop thru the array, checking with each iteration if the current element is in an array of previous elements. If it is it's returned. If not the function returns -1.
*/
