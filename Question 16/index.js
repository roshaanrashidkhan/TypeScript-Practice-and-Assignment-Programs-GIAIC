var guestList = ["Muhammad Waqar", "Zamam Ahmed", "Muhammad Saad Khan", "Sameer Moin", "Abdul Manay Khan"];
console.log("We are having more guests");
guestList.push("Nabeel Akbar");
guestList.unshift("Adil Akbar");
guestList.splice(3, 0, "Muhammad Tayyab");
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("".concat(guest, ", you are invited to our dinner party!"));
}
