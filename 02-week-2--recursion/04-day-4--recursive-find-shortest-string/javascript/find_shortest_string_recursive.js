function findShortestStringRecursive(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else if (arr[0].length > arr[1].length) {
    return findShortestStringRecursive(arr.slice(1));
  } else {
    return findShortestStringRecursive([...[arr[0]], ...arr.slice(2)]);
  }
}

if (require.main === module) {
  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestStringRecursive(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion']));

  // add your own tests in here
  console.log("");

  console.log("Expecting: 'Ron'");
  console.log("=>", findShortestStringRecursive(['ReBecca', 'Groot', 'Ron', 'Arya']));

  console.log("");

  console.log("Expecting: 'Maine'");
  console.log("=>", findShortestStringRecursive(['Mississippi', 'Maine', 'Montana', 'Maryland']));
}

module.exports = findShortestStringRecursive;

// Please add your pseudocode to this file
/*
- Base case: 
    Return the lone element when arr is length 1 or has been reduced to length 1 by recursive calls.
- Remove first element of array if longer than the second element.
- Remove the second element of array if not shorter than the first element.
*/

// And a written explanation of your solution
/*
If the array has one element, return that element. Otherwise, compare the lengths of the first and second element and remove the one that's longer with a preference for the first occurring until the array is reduced to one element.
*/
