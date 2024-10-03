// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var magicians = ["Criss Angel", "Derren Brown", "Iqbal Hussain"];
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
;
function make_great(magicians) {
    var greatMagicians = [];
    magicians.forEach(function (magician) {
        greatMagicians.push("".concat(magician, " The Great"));
    });
    return greatMagicians;
}
;
var greatMagicians = make_great(magicians);
console.log("Original Magicians:");
show_magicians(magicians);
console.log("Modified Magicians:");
show_magicians(greatMagicians);
