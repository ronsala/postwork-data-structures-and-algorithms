function fibonacci(num) {
  let [penult, ult, acc] = [0, 1, 0];

  for (let index = 0; index < num; index++) {
    penult = ult
    ult = acc
    acc = penult + ult;
  }

  return acc;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 8");
  console.log("=>", fibonacci(6));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));

  console.log("");

  console.log("Expecting: 196418");
  console.log("=>", fibonacci(27));

  console.log("");

  console.log("Expecting: 43466557686937456435688527675040625802564660517371780402481729089536555417949051890403879840079255169295922593080322634775209689623239873322471161642996440906533187938298969649928516003704476137795166849228875");
  console.log("=>", fibonacci(998));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
/*
- Assign 0 to an accumulator (acc) variable
- Assign 1 to an ultimate (ult) variable
- Assign 0 to an penultimate (penult) variable
- Iterate a loop num times
- Each time, penult = ult, ult = acc, acc = penult + ult
- When the end of the loop is reached (or if loop doesn't iterate) return acc
*/

// And a written explanation of your solution
/*
Function takes in an index and returns the fib number at that index.

Keeps track of the second to last and last numbers so far in sequence and returns the accumulated value.
*/

