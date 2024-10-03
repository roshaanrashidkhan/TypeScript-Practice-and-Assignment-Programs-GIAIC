// Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
let guestList: string[] = ["Muhammad Waqar", "Zamam Ahmed", "Muhammad Saad Khan", "Sameer Moin", "Abdul Manay Khan"];
console.log("We are having more guests");

guestList.push("Nabeel Akbar")
guestList.unshift("Adil Akbar")
guestList.splice(3, 0, "Muhammad Tayyab")

for (let guest of guestList) {
    console.log(`${guest}, you are invited to our dinner party!`)
}

console.log("Sorry, we can only have 2 guests due to our dinner table issue");

while (guestList.length > 2) {
   let removedGuests = guestList.pop();
   console.log(`Sorry! ${removedGuests}, there were some issues so we can't invite you to our dinner party`)
}

guestList.forEach(guest => {
    console.log(`${guest}, you are still invited to our dinner party`)
});

while (guestList.length > 0) {
    let removeAllGuests = guestList.pop()
}
console.log(guestList);