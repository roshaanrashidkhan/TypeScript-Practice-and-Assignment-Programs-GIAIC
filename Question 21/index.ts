// Question 21: Think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
let friends: {friend: string, friend1: string, friend2: string, friend3: string, friend4: string} = {
    friend: "Muhammad Waqar",
    friend1: "Muhammad Saad Khan",
    friend2: "Zamam Ahmed",
    friend3: "Sameer Moin",
    friend4: "Abdul Manay Khan"
};
console.log(`I have 1 friend with 1 seperate group. 
My Single Friend is: ${friends.friend}.
The Other Friends that are 1 group are namely: ${friends.friend1}, ${friends.friend2}, ${friends.friend3}, ${friends.friend4}`);