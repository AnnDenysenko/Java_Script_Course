"use strict";

//Task 1

let enteredNumber = +prompt("Enter your number: ");

if (enteredNumber >= 10){
    console.log("Accepted!");
}


//Task 2

let userPassword = "JavaScript";
let enteredPassword = prompt("Enter your password: ");

if(enteredPassword === userPassword){
    console.log("Welcome!");
} else {
    console.log("Wrong password!")
}


// Task 3

let userMessage = prompt("Enter your message: ");

if (typeof userMessage === "string"){
    userMessage = userMessage.trim();
}

if (userMessage){
    console.log(userMessage);
} else if (userMessage === null){
    console.log("Cancelled!");
} else if (userMessage === ""){
    console.log("You haven't enered any value");
}


//Task 4

let num1 = +prompt("Enter your first number: ");
let num2 = +prompt("Enter your second number");

if (num1 > num2){
    console.log("First number is greater than second one")
} else if (num2 > num1){
    console.log("Second number is greater than first one");
} else {
    console.log ("Numbers are equal");
}


//Task 5

let userNumber = +prompt("Enter your number: ");

if (userNumber%2 === 0){
    console.log("Your number is even");
} else {
    console.log("You number is odd");
}


//Task 6

let monthNumber = +prompt("Enter the month's number: ");

if (monthNumber === 12 || monthNumber === 1 || monthNumber === 2){
    console.log("It's winter season!");
} else if (monthNumber === 3 || monthNumber === 4 || monthNumber === 5){
    console.log("It's spring season!");
} else if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8){
    console.log("It's summer season!");
} else if (monthNumber === 9 || monthNumber === 10 || monthNumber === 11){
    console.log("It's autumn season!");
} else {
    console.log("You entered wrong month's number!")
}


//Task 7

let numberInput = +prompt("Enter your number: ");

if (numberInput >= 20 && numberInput <= 80){
    console.log("Your number is in range from 20 to 80!");
}


// Task 8

let number = +prompt("Enter your number: ");

if (!(number<20 || number >80)){
    console.log("Your number is in range from 20 to 80!");
}



//Task 9

let userRole = prompt("Enter your role: ");
let adminPassword = "TheMaster";

if (userRole === "Admin"){
    let userPassword = prompt("Enter your password: ");

    if (userPassword === "TheMaster"){
        console.log("Welcome!");
    } else if (userPassword === null){
        console.log("Cancelled!");
    } else {
        console.log("Wrong password!");
    }
} else if (userRole === null){
    console.log("Cancelled!");
} else {
    console.log("I don't know you!")
};