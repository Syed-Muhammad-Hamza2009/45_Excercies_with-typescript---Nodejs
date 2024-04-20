let guestList = ["Hamza", "Usman", "Khizar", "Hassan"];

let dontCome = guestList[0];

console.log(dontCome, "Ma Nahi bataoga ");

guestList.splice(0, 1, "Rafay");

guestList.forEach(guest => console.log(`salam ${guest}, would you like to Dinner withh me?`));
