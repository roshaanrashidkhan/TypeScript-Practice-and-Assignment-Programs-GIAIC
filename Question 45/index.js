// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function car_detail(manufacturer, modelName) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car_detail = { manufacturer: manufacturer, modelName: modelName };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return car_detail[key] = value;
    });
    return car_detail;
}
console.log(car_detail("Honda", "Civic", ["color", "blue"], ["year", 2020]));
