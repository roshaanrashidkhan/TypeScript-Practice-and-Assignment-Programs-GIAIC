// Question 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var favoriteCars = ["Honda", "Ford", "Ferrari", "Mitsubishi", "Mercedes"];
for (var favoriteCar = 0; favoriteCar < favoriteCars.length; favoriteCar++) {
    console.log("I would like to drive & own ".concat(favoriteCars[favoriteCar]));
}
