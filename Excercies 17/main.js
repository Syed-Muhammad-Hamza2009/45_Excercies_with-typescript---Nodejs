// creating a Guest List Array
var guestList = ["Hamza", "Usman", "Khizar", "Hassan"];
// making variable for those guest who cant come
var dontCome = guestList[0];
// Print the name of guest who cant come
console.log(dontCome, "Ma Nahi bataoga");
// add or Remove Values from Guest List Array
guestList.splice(0, 1, "Rafay");
// Message print for Bigger Table
console.log("Good News ! we have Found a Bigger Table For Dinner.");
//adding a new value at startingindex of Array
guestList.unshift("Ali");
// Adding a new value at ending index of Array
guestList.push("Zain");
// Get a middle index of our guest list array
var middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Osama");
// Print Message of Updated list
console.log("Updated List ofour Guests");
// sending a invitation message to our guests one with thier names 
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would you like to dinner with me")); });
// Inform that only two guests can be invited for dinner 
console.log("Unfortunately, the new dinner table wont arrive on time, so I can only invite two Guest to dinner with me");
// Using while-loop to remove guests from the array until only two names remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, " I cant invite you to dinner"));
}
// Printning a invitations to the last two guest on the list 
console.log("Invitations to the last 2 Guest");
guestList.forEach(function (lasttwo) { return console.log("Luckly ".concat(lasttwo, ", you are still invited to dinner")); });
// Removing last two Guest from the list
guestList.pop();
guestList.pop();
console.log("Empty List", guestList);
