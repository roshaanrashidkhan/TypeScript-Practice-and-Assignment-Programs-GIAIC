// Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var myName = "roshAan rasHiD kHaN";
console.log(myName.toLowerCase());
console.log(myName.toUpperCase());
var arrOfSecondName = myName.split(" ");
var titleArray = [];
arrOfSecondName.forEach(function (eachName) {
    titleArray.push(eachName.charAt(0).toUpperCase() + eachName.slice(1).toLowerCase());
});
var correctName = titleArray.join(" ");
console.log(correctName);
