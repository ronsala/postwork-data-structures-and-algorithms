function findShortestString(arr) {
  let shortest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < shortest.length) {
      shortest = arr[i];
    }
  }

  return shortest;
}

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

  // BENCHMARK HERE

    let shortInput = ["JavaScript", "Ruby", "Python"];
    let longInput = [];

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 100; i++) {
      let string = '';
      const length = Math.floor(Math.random() * 10) +1;

      for (let j = 0; j < length; j++) {
        const letter = letters.charAt(Math.floor(Math.random() * letters.length));
        string += letter;
      }

      longInput.push(string);
    }

    const iterativeStartTime = Date.now();

    for (let i = 0; i < 1000; i++) {
      findShortestString(shortInput);
      findShortestString(longInput);
    }

    let iterativeEndTime = Date.now();
    let iterativeRuntime = iterativeEndTime - iterativeStartTime;

    console.log(`Iterative version average runtime: ${iterativeRuntime / 2000} millisecond(s)`);

    const recursiveStartTime = Date.now();

    for (let i = 0; i < 1000; i++) {
      findShortestStringRecursive(shortInput);
      findShortestStringRecursive(longInput);
    }

    let recursiveEndTime = Date.now();
    let recursiveRuntime = recursiveEndTime - recursiveStartTime;

    console.log(`Recursive version average runtime: ${recursiveRuntime / 2000} millisecond(s)`);
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
