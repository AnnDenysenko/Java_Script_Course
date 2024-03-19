"use strict";

// Task 1

// #1

function sumOfNumbers(num1, num2){
    return num1 + num2;
}

let result = sumOfNumbers(3,6)
console.log(result);


// #2

function multBy5(num) {
    console.log(`5 * ${num} = ${5*num}`);
}

multBy5(4);


// #3

function max(num1, num2){
    if(num1 > num2){
        return num1
    } else if (num2 > num1){
        return num2
    } else {
        return "Numbers are equal";
    }
}

let isGreater = max(555, 555);
console.log(isGreater);



// Task 2

function pow(x = 3, n = 2){
    let res = 1;
    for(let i = 0; i < n; i++){
        res = res * x;
    }
    return(res);
}
console.log(pow(2, 4));



// Task 3

function sumOrConcatination(value1 = 15, value2 = 15){
    if (typeof value1 === "string" || typeof value2 === "string"){
        return `Результат конкатенації: ${value1 + value2}.`;
    } else if (typeof value1 === "number" && typeof value2 === "number"){
        return `Результат суми: ${value1 + value2}.`;
    } else {
        return "Entered arguments are incorrect."
    }
}
let resultOfSelection = sumOrConcatination(2, 10);
console.log(resultOfSelection);



// Task 4

function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }
  
  let numberInSequence = fib(11);
  console.log(numberInSequence);