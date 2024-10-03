// Question 19: Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
// Program 16 continued
var guestList = ["Muhammad Waqar", "Zamam Ahmed", "Muhammad Saad Khan", "Sameer Moin", "Abdul Manay Khan"];
console.log("We are having more guests");
guestList.push("Nabeel Akbar");
guestList.unshift("Adil Akbar");
guestList.splice(3, 0, "Muhammad Tayyab");
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("".concat(guest, ", you are invited to our dinner party!"));
}
console.log("We are having ".concat(guestList.length, " guests."));
