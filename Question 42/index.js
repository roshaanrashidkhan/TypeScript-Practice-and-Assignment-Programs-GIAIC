// Question 42: Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
var magicians = ["Criss Angel", "Derren Brown", "Iqbal Hussain"];
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function make_great(magicians) {
    for (var magician in magicians) {
        magicians[magician] = magicians[magician] + " " + "The Great";
    }
}
make_great(magicians);
show_magicians(magicians);
