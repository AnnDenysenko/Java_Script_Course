"use strict";

// Task 1

let number1 = +prompt("Enter first number: ");
let number2 = +prompt("Enter second number: ");

let rem = number1%number2;
let pow = number1**number2;

console.log(`Залишок від ділення ${number1}, на ${number2} дорівнює ${rem}`);
console.log(`Результат зведеня ${number1}, у ступінь ${number2} дорівнює ${pow}`);


//Task 2

let num = 10;
num += 5;
num -= 2;
num *= 2;

num++;
num++;
num++;

console.log(num);


// Task 3

console.log(16%2);
console.log(25%3);
console.log(47%3);


//Task 4

let userAge = +prompt('Enter your age: ');

if(userAge>=18){
    console.log(true);
} else{
    console.log(false);
}


//Task 5

let x = +prompt("Enter your first number: ");6
let y = +prompt("Enter your second number: ");2

x = x + y;
y = x - y;
x = x - y;

console.log(x);
console.log(y);