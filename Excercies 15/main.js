var guestList = ["Hamza", "Usman", "Khizar", "Hassan"];
var dontCome = guestList[0];
console.log(dontCome, "Ma Nahi bataoga ");
guestList.splice(0, 1, "Rafay");
guestList.forEach(function (guest) { return console.log("salam ".concat(guest, ", would you like to Dinner withh me?")); });
