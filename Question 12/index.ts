// Question 11: Names: Store the names of a few of your friends in an array called names. Print each person’s name by accessing each element in the list, one at a time.
let names: string[] = ["Muhammad Saad Khan", "Zamam Ahmed", "Sameer Moin", "Abdul Manay Khan", "Muhammad Waqar"];
for (let friendName = 0; friendName < names.length; friendName++){
    console.log(`Assalam O Alaikum! ${names[friendName]}`)
}