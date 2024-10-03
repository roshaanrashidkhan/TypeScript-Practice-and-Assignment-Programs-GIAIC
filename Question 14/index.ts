// Question 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guestList: string[] = ["Nadeem Chachu", "Zamam Ahmed", "Muhammad Saad Khan", "Sameer Moin", "Abdul Manay Khan"];
for (let guest in guestList) {
    console.log(`${guestList[guest]}, you are invited to my dinner party on Saturday at 8:00 PM`)
}