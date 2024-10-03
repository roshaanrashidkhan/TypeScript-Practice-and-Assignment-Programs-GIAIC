// Question 19: Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
// Program 16 continued
let guestList: string[] = ["Muhammad Waqar", "Zamam Ahmed", "Muhammad Saad Khan", "Sameer Moin", "Abdul Manay Khan"];
console.log("We are having more guests");

guestList.push("Nabeel Akbar")
guestList.unshift("Adil Akbar")
guestList.splice(3, 0, "Muhammad Tayyab")

for (let guest of guestList) {
    console.log(`${guest}, you are invited to our dinner party!`)
}

console.log(`We are having ${guestList.length} guests.`);