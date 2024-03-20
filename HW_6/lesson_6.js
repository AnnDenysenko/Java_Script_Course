"use strict";

// // Task 1

// // #1

//   function capitalize(str) {
//     if(!str) return str;

//     return str[0].toUpperCase() + str.slice(1).toLowerCase();
//   }

//   console.log(capitalize("Download Report List"));


// #2

function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("hello"));

// https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/