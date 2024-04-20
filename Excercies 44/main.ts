// Define a function with a rest parameter that accept items arugments reposenting our sandwich
function makeSandwich(...items: string[]){
    console.log("\nMaking a sandwich with the following items: \n");
    
    items.forEach(singleItem => console.log(singleItem));
    
    console.log("Now Enjoy Sandwich")
}

// Call the function 3 times with 3 different number of argument
makeSandwich("Chicken", "Cheese", "Mayo", "Egg");

makeSandwich("Bread", "Butter");

makeSandwich("Bread", "Butter", "Mayo", "Egg", "Cheese", "Chicken", "Lettuce", "Tomato");
