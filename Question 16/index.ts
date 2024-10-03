// Question 16: More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
let guestList: string[] = ["Muhammad Waqar", "Zamam Ahmed", "Muhammad Saad Khan", "Sameer Moin", "Abdul Manay Khan"];
console.log("We are having more guests");

guestList.push("Nabeel Akbar")
guestList.unshift("Adil Akbar")
guestList.splice(3, 0, "Muhammad Tayyab")

for (let guest of guestList) {
    console.log(`${guest}, you are invited to our dinner party!`)
}