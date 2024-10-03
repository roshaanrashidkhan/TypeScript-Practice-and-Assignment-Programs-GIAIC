// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
var items = [];
function sandwich_items() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("So, you want ".concat(items.join(", "), " in your sandwich!"));
}
sandwich_items("salt", "mayo", "chicken");
sandwich_items("mayonnaisa", "chicken kabab", "salad");
sandwich_items("ketchup", "chatni", "beef kabab", "salad");
