// Question 22: Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
var myNames = ["Roshaan Rashid Khan", "Saad"];
console.log(myNames[2]); // Since index starts with 0, so the index 2 is out of bounds and it will print undefined
myNames.push("Saadi"); // correcting our program by adding another name where it's index will be 2.
console.log(myNames[2]); // Therefore, it will print "Saadi".
