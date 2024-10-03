// Question 24: More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
console.log("Test 1: Using Equality & Inequality with Strings");
var fruit = "apple";
console.log(fruit === "apple"); // True
console.log(fruit !== "apple"); // False
// • Tests using the lower case function
console.log("Test 2: Using Lower Case Function");
console.log("Apple".toLowerCase() === fruit); // True
console.log("Apple".toLowerCase() !== fruit); // False
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Test 3(1): Numerical Testing with Equality and Inequality");
var a = 5;
var b = 10;
console.log(a === b); // False
console.log(a !== b); // True
console.log("Test 3(2): Numerical Testing with Greater than and Less than");
console.log(a > b); // False
console.log(a < b); // True
console.log("Test 3(3): Numerical Testing with Greater than or equal to and Less than or equal to");
console.log(a >= b); // False
console.log(a <= b); // True
// • Tests using "and" and "or" operators
console.log("Test 4-1: Using \"and\" operator");
console.log(true && true); // True
console.log(true && false); // False
console.log("Test 4-2: Using \"or\" operator");
console.log(true || false); // True
console.log(false || false); // False
// • Test whether an item is in a array
console.log("Test 5: Using array to check whether an item is in an array");
var myItems = ["Laptop", "Mouse", "Handfree"];
console.log(myItems[0] === "Laptop");
console.log(myItems[1] === "Laptop");
// • Test whether an item is not in a array
console.log("Test 5: Using array to check whether an item is in an array");
console.log(myItems[1] !== "Laptop");
console.log(myItems[0] !== "Laptop");
