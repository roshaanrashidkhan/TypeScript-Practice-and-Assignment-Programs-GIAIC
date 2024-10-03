var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["Naran Kaghan", "Badshahi Mosque", "Mohatta Palace Museum", "Faisal Mosque", "Neelum Valley"];
console.log("Original Order:", places);
console.log("Alphabetical Order:", __spreadArray([], places, true).sort());
console.log("Original Order:", places);
console.log("Reversed Alphabetical Order:", __spreadArray([], places, true).sort().reverse());
console.log("Original Order:", places);
console.log("Reversed Order:", places.reverse());
console.log("Original Order:", places.reverse());
console.log("Original Alphabetical Order:", places.sort());
console.log("Original Alphabetical Order:", places.sort().reverse());
