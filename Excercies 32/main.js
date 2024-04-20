// Array of Current Users
var current_users = ["Usman", "Hamza", "Khizar", "Hassan", "Bilal"];
// Array of New Users 
var new_users = ["Hamza", "Munaver", "Zain", "Mahad", "Hammad"];
// Loop through new_users to check for usernames avaibility
new_users.forEach(function (new_one_user) {
    // Making a Condition for username already exist and save in our_condition variable
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // Print Different messages using If-Else statements
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This Username ".concat(new_one_user, " is available"));
    }
});
