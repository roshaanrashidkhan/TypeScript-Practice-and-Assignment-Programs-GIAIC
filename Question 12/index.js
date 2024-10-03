// Question 11: Names: Store the names of a few of your friends in an array called names. Print each person’s name by accessing each element in the list, one at a time.
var friendsName = ["Muhammad Saad Khan", "Zamam Ahmed", "Sameer Moin", "Abdul Manay Khan", "Muhammad Waqar"];
for (var friendName = 0; friendName < friendsName.length; friendName++) {
    console.log("Assalam O Alaikum! ".concat(friendsName[friendName]));
}
