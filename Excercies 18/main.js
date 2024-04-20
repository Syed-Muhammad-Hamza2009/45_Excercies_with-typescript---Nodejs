var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making a Array of countries and Print its Orginal Ordder
var countriestovisit = ["China", "Pakistan", "India", "Afganistan"];
console.log("Orginal Order:", countriestovisit);
// Print the Array inAlphabetical order without modifying the Actual Array List
console.log("Alphabetical Order:", __spreadArray([], countriestovisit, true).sort());
// show that thearray is still in its orginal order
console.log("still in Orginal Order:", countriestovisit);
// Print the Array in Reversed order without modifying the Actual Array List
console.log("Reverse Order:", __spreadArray([], countriestovisit, true).reverse());
// show that thearray is still in its orginal order
console.log("still in Orginal Order:", countriestovisit);
// we have Change the Orginal Array Order Now
console.log("Orginal Array Reversed:", countriestovisit.reverse());
//Print the array to show that it`s back to its orginal order
console.log("Back to Orginal Order:", countriestovisit.reverse());
//  Print the array to show that its order has been changed in Alphabetical order now
console.log("sorted in Alphabetical Order:", countriestovisit.sort());
// we have Changed again the Orginal Array Order Now
console.log("Orginal Array Reversed:", countriestovisit.reverse());
