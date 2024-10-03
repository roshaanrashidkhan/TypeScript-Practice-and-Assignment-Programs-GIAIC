// Question 10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If the programs are straightforward at this point, just add your name and the current date at the top of each program file. Then, write one sentence describing what the program does.

// Name: Roshaan Rashid Khan, Date: 12/04/2024
// Program 1
// Question 5: Famous Quote 2: Repeat Exercise 3, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message
// This Program First stores the Famous Personality's Name in a variable called "famous_person" then, we will make another variable named "message" and use template literal to use the famous_person variable where we stored our famous personality name and then print our message.
let famous_person: string = "Forrest Gump";
let message: string = `${famous_person} once said, "Life is like a box of chocolates. You never know what you're gonna get."`;
console.log(message);

// Name: Roshaan Rashid Khan, Date: 12/04/2024
// Program 2
// Question 6: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Use "\t" (tab) and "\n" (new line) at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after stripping the white spaces.
// This Program first stores the person's name in "personName" variable with whitespaces using \t for spaces and \n for new line. Then we will make new variable named "removeWhitespacesInName" where we will store our previous variable and use trim() property to remove whitespaces from beginning and the end and then print it.
let personName:string = '\tRoshaan Rashid Khan\n';
console.log(personName);
let removeWhitespacesInName:string = personName.trim()
console.log(removeWhitespacesInName)