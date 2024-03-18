"use strict";

//Task 1

// #1 

let num1 = +prompt("Enter your first number: ");
let num2 = +prompt("Enter your second number");

let message = (num1 > num2) ? "First number is greater than second one" : "Second number is greater than first one";
console.log(message);


// #2

let userMessage = prompt("Enter your message: ");

if (typeof userMessage === "string"){
    userMessage = userMessage.trim();
}

// if (userMessage){
//     console.log(userMessage);
// } else if (userMessage === null){
//     console.log("Cancelled!");
// } else if (userMessage === ""){
//     console.log("You haven't entered any value");
// }


switch (userMessage){
    case "":
    console.log("You haven't entered any value");
    break

    case null:
    console.log("Cancelled!");
    break

    default:
        console.log(userMessage);
        break
}


// #3

let monthNumber = +prompt("Enter the month's number: ");

// let isWinter = monthNumber === 12 || monthNumber === 1 || monthNumber === 2;
// let isSpring = monthNumber === 3 || monthNumber === 4 || monthNumber === 5;
// let isSummer = monthNumber === 6 || monthNumber === 7 || monthNumber === 8;
// let isAutumn = monthNumber === 9 || monthNumber === 10 || monthNumber === 11;

// if (monthNumber === 12 || monthNumber === 1 || monthNumber === 2){
//     console.log("It's winter season!");
// } else if (monthNumber === 3 || monthNumber === 4 || monthNumber === 5){
//     console.log("It's spring season!");
// } else if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8){
//     console.log("It's summer season!");
// } else if (monthNumber === 9 || monthNumber === 10 || monthNumber === 11){
//     console.log("It's autumn season!");
// } else {
//     console.log("You entered wrong month's number!")
// }

switch(monthNumber){
    case 1:
    console.log("It's winter season!");
    break

    case 2:
    console.log("It's winter season!");
    break

    case 3:
    console.log("It's winter season!");
    break
    
    case 4:
    console.log("It's spring season!");
    break

    case 5:
    console.log("It's spring season!");
    break

    case 6:
    console.log("It's spring season!");
    break

    case 7:
    console.log("It's summer season!");
    break

    case 8:
    console.log("It's summer season!");
    break

    case 9:
    console.log("It's summer season!");
    break

    case 10:
    console.log("It's autumn season!");
    break

    case 11:
    console.log("It's autumn season!");
    break

    case 12:
    console.log("It's autumn season!");
    break

    default:
    console.log("You entered wrong month's number!")
    break
}



// #4

let iteration = 0;

while(iteration <= 10){
    console.log(i);
    iteration++;
}


// #5

let numberBegin = +prompt("Enter your first number: ");
let numberEnd = +prompt("Enter your second number: ");

for(let i = numberBegin; i<=numberEnd; i++){
    if(i%5 === 0){
        console.log(i);
    }
}


// #6

let numberToMultiply = 3;

for (let i = 1; i <= 9; i++){
    let result = i * numberToMultiply;
    console.log(`${numberToMultiply} multiplied by the number of ${i} is ${result};`);
}


// Task 2

let output = 0;
for (let i = 1; i <= 5; i++){
  output += Number(prompt('Enter your number: ' + i));
}
console.log(output);


// Task 3

let enteredNumber = +prompt("Enter your number to get its factorial: ");
let result = 1;

for (let i = 1; i <= enteredNumber; i++){
    result *= i;
}
console.log(`The factorial of ${enteredNumber} is ${result}.`); 



// Task 4

let userInput = +prompt("Enter number of rows in the triangle: ");
let triangle = "*";
let i = 0;

while(i <= userInput){
console.log(triangle);
triangle = triangle + "*";
i ++;
}