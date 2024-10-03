// Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let myName:string = "roshAan rasHiD kHaN";
console.log(myName.toLowerCase());
console.log(myName.toUpperCase());

let arrOfSecondName = myName.split(" ")
let titleArray: string[] = [];
arrOfSecondName.forEach((eachName) => {
   titleArray.push(eachName.charAt(0).toUpperCase() + eachName.slice(1).toLowerCase());
})

let correctName: string = titleArray.join(" ");
console.log(correctName);