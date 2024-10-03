// Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
let guestList: string[] = ["Nadeem Chachu", "Zamam Ahmed", "Muhammad Saad Khan", "Sameer Moin", "Abdul Manay Khan"];

let notAbleToAttend: string = "Nadeem Chachu"

let newGuest: string = "Muhammad Waqar"
guestList[guestList.indexOf(notAbleToAttend)] = newGuest;

for (let guest of guestList) {
    console.log(`${guest}, you are invited to my dinner party on Saturday at 8:00 PM`)
}
console.log(`${notAbleToAttend} is not going to attend our dinner party. So, our new guest is ${newGuest}`)