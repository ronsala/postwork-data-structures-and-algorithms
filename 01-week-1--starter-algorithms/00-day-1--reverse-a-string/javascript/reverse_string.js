function reverseString(str) {
	// type your code here
	let arr = [];
	let newStr = "";
	for (let i = str.length - 1; i > -1; i--) {
		arr.push(str.charAt(i));
		newStr = arr.join("");
	}
	return newStr;
}

if (require.main === module) {
	// add your own tests in here

	console.log("Expecting: 'acceBeR'");
	console.log("=>", reverseString("ReBecca"));

	console.log("");

	console.log("Expecting: 'toorG'");
	console.log("=>", reverseString("Groot"));

	console.log("");

	console.log("Expecting: 'ayrA'");
	console.log("=>", reverseString("Arya"));

	console.log("");

	console.log("Expecting: 'ih'");
	console.log("=>", reverseString("hi"));

	console.log("");

	console.log("Expecting: 'ybabtac'");
	console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file

// 1. Rewrite the problem in your own words
// Function takes a string and returns it backwards without using methods that specifically do that.

// 2. Validate that you understand the problem
// Ex: 'Ron' ==> 'noR'

// 3. Write your own test cases
// 'ReBecca' ==> 'acceBeR'
// 'Arya' ==> 'ayrA'
// 'Groot' ==> 'toorG'

// 4. Pseudocode
// - Take the last letter of the string
// - Add it to a new string
// - Take the second to last letter and add it to the end of the new string
// - Keep going backwards through the original string and adding to the new string until all letters are in new string
// - Return new string

// 5. Code!

// And a written explanation of your solution
