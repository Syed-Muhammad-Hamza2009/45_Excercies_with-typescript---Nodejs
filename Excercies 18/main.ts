// Making a Array of countries and Print its Orginal Ordder
let countriestovisit: string[] = ["China", "Pakistan", "India", "Afganistan"];
console.log("Orginal Order:", countriestovisit);

// Print the Array inAlphabetical order without modifying the Actual Array List
console.log("Alphabetical Order:", [...countriestovisit].sort());

// show that thearray is still in its orginal order
console.log("still in Orginal Order:", countriestovisit);

// Print the Array in Reversed order without modifying the Actual Array List
console.log("Reverse Order:", [...countriestovisit].reverse());

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
