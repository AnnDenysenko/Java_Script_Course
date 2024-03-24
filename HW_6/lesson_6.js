"use strict";

// Task 1

// #1

  function capitalize(str) {
    if(!str) return str;

    return str[0].toUpperCase() + str.slice(1).toLowerCase();
  }

  console.log(capitalize("Download Report List"));


// #2

function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("hello"));



// #3

function convertToBinary(number) {
    return number.toString(2);
}

console.log(convertToBinary(2227));


// #4

function generateRandomFloat(n) {

  // generating a random number from 0 to 100
    let randomNumber = Math.random() * 100;
    
  // round up a received random number to n-amount of numbers after comma
    let generatedResult = randomNumber.toFixed(n);
    return parseFloat(generatedResult);

}

console.log(generateRandomFloat(5));



// Task 2

function isPalindrome(str){

  // removing all spaces and turning the string into lower case
    str  = str.replace(/[\W_]/g, '').toLowerCase();

  // splitting all the characters, reversing the sting and joining all the characters back  
    let reverseString = str.split('').reverse().join(''); 

  // comparing entered and received strings
    return str === reverseString;

}

const enteredText = prompt('Enter a string: '); // example: Never odd or even

console.log(isPalindrome(enteredText));


// Task 3

function sumOfNumbers(number){

        let string = number.toString();
        let sum = 0;
      
        for (let i = 0; i < string.length; i++) {
          sum += parseInt(string.charAt(i), 10);
        }
      
        return sum;
      }

const enteredNumber = +prompt("Enter your number: ");

console.log(sumOfNumbers(enteredNumber));


// Task 4

function generateNumberInLimit(start, end){
    return Math.floor((Math.random() * (end - start) + end));
}

const enteredMin = prompt("Enter min limit of your range: ");
const enteredMax = prompt("Enter max limit of your range: ");

console.log(generateNumberInLimit(enteredMin, enteredMax));


// Task 5

function toCamelCase(str){
    return str.replace(
        /(?!^)_(.)/g,
        (_, char) => char.toUpperCase());
}

const enteredValue = prompt("Enter your string in snake_case: ");

console.log(toCamelCase(enteredValue));