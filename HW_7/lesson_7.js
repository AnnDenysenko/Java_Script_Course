"use strict";

// Task 1

let actor = {
    name: "Robert",
    surname: "Downey",
};

actor.name = "John";

delete actor.name;

console.log(actor);


// Task 2

let personMe = {
    firstName: "Anna",
    lastName: "Denysenko",
}

let phone = prompt("Enter your phone number: ");

let contacts = {
    phone: phone,
    email: "annadenysenko@gmail.com",
}

contacts.phone = phone;

personMe.contacts = contacts;

personMe = {
    firstName: "Anna",
    lastName: "Denysenko",
    contacts: {
    phone: phone,
    email: "annadenysenko@gmail.com",
}
}

console.log(personMe);


// Task 3

let topSeries = ["The Big Bang Theory", "Bones", "Mindhunter"];

topSeries.unshift("Locke & Keys");
topSeries.push("Breaking Bad");

console.log(topSeries);


// Task 4

let employee = {
	salary: 2000,
	taxes: 200,
	position: "front-end developer",
	level: "middle",
}

// enlarging all numbers in the object with "for" loop:
for (let i in employee) {
    if (typeof employee[i] === "number") {
        employee[i] = employee[i] + 2;
    }
}

// adding method showInfo() into the object "employee"
employee.showInfo = function(){
    console.log(`${this.level} ${this.position} gets ${this.salary}. `);
}

// calling showInfo method
console.log(employee.showInfo());

// creating an object employee2 with the same set of keys
let employee2 = {
	salary: 2000,
	taxes: 200,
	position: "front-end developer",
	level: "middle",
}

// copying showInfo method from the object employee into employee2
employee2.showInfo = employee.showInfo;

// calling showInfo method for the second object
console.log(employee2.showInfo());


// Task 5

function sumInput() {
    // Declaring an array to store entered numbers
    let arrayOfNumbers = [];

    while (true) {
        let userInput = prompt("Enter your number: ");
        // Stop executing the loop if not a number is entered, "Cancelled" is pressed, empty string is entered
        if (userInput === "" || userInput === null || userInput === NaN) {
            break;
        }

        //Adding numbers into an array
        arrayOfNumbers.push(+userInput);
    }
    
    // Creating variable to store the sum
    let sum = 0;
    
    // Running the for loop
    for (let i of arrayOfNumbers) {
        sum += i;
    }

    return sum;
}

let result = sumInput();
console.log("Sum of entered numbers is:", result);


// Task 6

const person = {
    name: "John",
    age: 30,
    job: 'software engineer',
    address: {
     city: "New York",
     country: "USA"
    }
   };

// Destructuring values from the object person into corresponding variables
const { name, age, job: currentJob, address: {city}, address: {country: currentCountry} } = person;

console.log("Current Job:", currentJob);
console.log("Current Country:", currentCountry);


// Task 7

let books = {
    countries: [
     {
      country: "Англія",
      authors: [
       {
        author: "Артур Конан Дойль",
        books: [
         {
          title: "Пригоди Шерлока Холмса",
          year: 1887,
          genre: "Роман"
         },
         {
          title: "Загадка Боскомського долу",
          year: 1912,
          genre: "Детектив"
         },
         {
          title: "Загадка Червоного Цирку",
          year: 1927,
          genre: "Детектив"
         }
        ]
       }
      ]
     },
     {
      country: "Україна",
      authors: [
       {
        author: "Макс Кідрук",
        books: [
         {
          title: "Твердиня",
          year: 2013,
          genre: "Роман"
         },
         {
          title: "Нові темні віки",
          year: 2023,
          genre: "Роман"
         }
        ]
       },
       {
        author: "Тарас Шевченко",
        books: [
         {
          title: "Кобзар",
          year: 1840,
          genre: "Роман"
         }
        ]
       }
      ]
     } 
    ]
   }


// Destructuring the object

let { 
    countries: [
        {
            authors: [
                {
                    books: [
                        firstBook,
                        ,
                        thirdBook
                    ]
                }
            ]
        },
        {
            authors: [
                {
                    books: [
                        ,
                        { title: secondKidrukBookName }
                    ]
                },
                {
                    books: [
                        { year: yearOfPublicationKobzar }
                    ]
                }
            ]
        }
    ]
} = books;

console.log("Перша книга Конана Дойля:", firstBook);
console.log("Третя книга Конана Дойля:", thirdBook);
console.log("Назва другої книги Макса Кідрука:", secondKidrukBookName);
console.log("Рік видання Кобзаря:", yearOfPublicationKobzar);