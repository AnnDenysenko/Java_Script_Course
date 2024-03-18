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

    case 2:

    case 3:
    console.log("It's winter season!");
    break
    
    case 4:

    case 5:

    case 6:
    console.log("It's spring season!");
    break

    case 7:

    case 8:

    case 9:
    console.log("It's summer season!");
    break

    case 10:

    case 11:

    case 12:
    console.log("It's autumn season!");
    break

    default:
    console.log("You entered wrong month's number!")
    break
}



// #4

// while loop

let iteration = 0;

while(iteration <= 10){
    console.log(iteration);
    iteration++;
}


// for loop

for (let i = 0; i <=10; i++){
    console.log(i);
}

// #5

//for loop

let numberBegin1 = +prompt("Enter your first number: ");
let numberEnd1 = +prompt("Enter your second number: ");

for(let i = numberBegin1; i<=numberEnd1; i++){
    if(i%5 === 0){
        console.log(i);
    }
}


//while loop

let numberBegin2 = +prompt("Enter your first number: ");
let numberEnd2 = +prompt("Enter your second number: ");

while (numberBegin2 <= numberEnd2){
    numberBegin2++;
    if(numberBegin2%2 === 0)
    console.log(numberBegin2);
}


// #6

//for loop

let numberToMultiply1 = 3;

for (let i = 1; i <= 9; i++){
    let result = i * numberToMultiply1;
    console.log(`${numberToMultiply1} multiplied by the number of ${i} is ${result};`);
}


// while loop

let numberToMultiply2 = 3;
let iter = 1;

while (iter <= 9){
    iter++;
    result = iter * numberToMultiply2;
    console.log(`${numberToMultiply2} multiplied by the number of ${iter} is ${result};`);
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