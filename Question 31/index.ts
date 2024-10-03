// Question 31: No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

// There are no users in this array, so, we need to find users.
let users: string[] = [];
if (users.length === 0) {
    console.log("We need to find some users!");
}

// Now, we have users, therefore, we can greet them now.
users = ["roshaanrashidkhan", "zamamahmed21", "sameermoin21", "manaykhan", "admin"];
console.log("Hurray! We got some users.")
for (let user of users){
    if(user === "admin"){
        console.log(`Hello admin, would you like to see a status report?`)
    }
    else if(user !== "admin"){
        console.log(`Hello ${user}, thank you for logging in again.`)
    }
}