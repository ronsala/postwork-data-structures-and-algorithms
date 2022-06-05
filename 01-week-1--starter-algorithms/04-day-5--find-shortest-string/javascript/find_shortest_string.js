function findShortestString(arr) {
  let shortest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < shortest.length) {
      shortest = arr[i];
    }
  }

  return shortest;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  console.log("");

  console.log("Expecting: 'Ron'");
  console.log("=>", findShortestString(['ReBecca', 'Groot', 'Ron', 'Arya']));

  console.log("");

  console.log("Expecting: 'Maine'");
  console.log("=>", findShortestString(['Mississippi', 'Maine', 'Montana', 'Maryland']));

  // BENCHMARK HERE
    const startTime = Date.now();
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

    for (let i = 0; i < 1000; i++) {
      findShortestString(shortInput);
      findShortestString(longInput);
    }

    let endTime = Date.now();
    let runtime = endTime - startTime;

    console.log(`Runtime: ${runtime} millisecond(s)`);
    console.log(`Average runtime: ${runtime / 2000} millisecond(s)`);
}

module.exports = findShortestString;

// Please add your pseudocode to this file
/*
- Iterate through array
- Set first string to variable
- If any string is shorter than the string stored with the variable, overwrite it
- Return the variable's string
*/


// And a written explanation of your solution
/*
Uses a for loop to check each element of the input array and keep track of the shortest string. In order to be counted as such, each checked string must be shorter than the one already saved, meaning if more than one string is equal length to the another in the array, the one earliest listed will be returned.
*/
