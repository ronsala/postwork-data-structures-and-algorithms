function fibonacci(n) {
  if (n <= 1) {
    return n
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));

  console.log("");

  console.log("Expecting: 2");
  console.log("=>", fibonacci(3));

  console.log("");

  console.log("Expecting: 8");
  console.log("=>", fibonacci(6));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
/*
- Base case 1: Return number itself if < 2.
- Base case 2: Otherwise, return an expression adding the return values of recursive calls.
*/

// And a written explanation of your solution
/*
Function keeps calling itself to derive the sum of the return values of when the number - 1 and number -2 are passed in to it. That is it sums the previous fib numbers to get the current one.
*/
