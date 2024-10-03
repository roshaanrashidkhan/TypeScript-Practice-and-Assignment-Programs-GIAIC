// Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
var guestList = ["Nadeem Chachu", "Zamam Ahmed", "Muhammad Saad Khan", "Sameer Moin", "Abdul Manay Khan"];
// for (let guest in guestList) {
//     console.log(`${guestList[guest]}, you are invited to my dinner party on Saturday at 8:00 PM`)
// }
var notAbleToAttend = "Nadeem Chachu";
var newGuest = "Muhammad Waqar";
guestList[guestList.indexOf(notAbleToAttend)] = newGuest;
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("".concat(guest, ", you are invited to my dinner party on Saturday at 8:00 PM"));
}
console.log("".concat(notAbleToAttend, " is not going to attend our dinner party. So, our new guest is ").concat(newGuest));
