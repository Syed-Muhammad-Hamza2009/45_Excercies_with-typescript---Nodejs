// Making a function 
function make_shirt (size: string = "Large", printMessage: string = "I Love Typescript"){
    console.log(`Creating a ${size} shirt with the ${printMessage} print on shirt`)
}

// Calling a function with by-defalt values
make_shirt();

// Calling a function now with Medium size and defalt message
make_shirt("Medium");

// Calling a function now with Small size and also Different Print Mesage
make_shirt("Small", "I love JavaScript")