//question 1
// Write a function that takes a user's age and determines if they are old enough to vote(age 18 or older).

// const isEligibleToVote = function (age) {
//   if (age >= 18) {
//     console.log("Eligible to vote");
//   } else {
//     console.log("Not eligible to vote");
//   }
// };
// isEligibleToVote(15);

// question2
// 1. Write a function that takes two numbers as input and determines which one is greater.

// const isGreater = function (num1, num2) {
//   if (num1 > num2) {
//     console.log(`${num1} is greater than ${num2}`);
//   } else if (num1 === num2) {
//     console.log("both are same");
//   } else {
//     console.log(`${num2} is greater than ${num1}`);
//   }
// };
// isGreater(2, 4);
// isGreater(5, 3);
// isGreater(22, 22);

// question3
// Write a function that takes a number as input and determines if it is positive or negative.
// const checkNum = function (num) {
//   if (num > 0) {
//     console.log("Positive Number");
//   } else if (num == 0) {
//     console.log("neither positive nor negative");
//   } else {
//     console.log("negative number");
//   }
// };
// checkNum(1);
// checkNum(-1);
// checkNum(0);

//question4
// Write a function that takes a number as input and determines if it is even or odd.
// const isEvenOdd = function (num) {
//   if (num % 2 == 0) {
//     console.log("even number");
//   } else {
//     console.log("odd number");
//   }
// };
// isEvenOdd(-2);
// isEvenOdd(2);
// isEvenOdd(3);

// question5
// Write a function that takes a string as input and determines if it contains the letter 'a' or ‘A’.
// const checkForAlphabetA = function (str) {
//   if (str.includes("a" || "A")) {
//     console.log("includes a");
//   } else {
//     console.log("does not contains a");
//   }
// };
// checkForAlphabetA("Tanay");
// checkForAlphabetA("Jeep");
// checkForAlphabetA("Jane");

// questoin6
// Write a function that takes a string as input and determines if it is longer than 5 characters.
// const checkLength = function (str) {
//   if (str.length > 5) {
//     return "more than 5 characters ";
//   } else if (str.length == 5) {
//     return "equal to 5 characters";
//   } else {
//     return "less than  5 characters";
//   }
// };
// console.log(checkLength("Programming"));
// console.log(checkLength("Jeep"));

// question 7
// Write a function that takes a number as input and determines if it is between 1 and 10.
// const isBetweenOneAndTen = function (num) {
//   if (num < 10 && num > 1) {
//     return true;
//   } else return false;
// };
// console.log(isBetweenOneAndTen(5)); // true
// console.log(isBetweenOneAndTen(11)); // false

// question 8
// Write a function that takes a string as input and determines if it contains the word "hello".
// const isHelloPresent = function (str) {
//   if (str.toLowerCase().includes("hello")) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(isHelloPresent("Hello World")); // true
// console.log(isHelloPresent("hellOOOOO JI")); // true

// question 9
// Write a function that takes a number as input and determines if it is a multiple of 3.
// const isMultipleOfThree = function (num) {
//   if (!(num % 3)) {
//     return true;
//   } else return false;
// };
// console.log(isMultipleOfThree(5)); // false
// console.log(isMultipleOfThree(9)); // true

// question 10
// Write a function which takes in a number as input and returns it after multiplying by 10.
// const multiplyByTen = (num) => num * 10;
// console.log(multiplyByTen(20)); // 200
// console.log(multiplyByTen(40)); // 400

// question 11
// Console individual values of the product object using object destructuring.
// const product = {
//   title: "iPhone",
//   price: 5999,
//   description: "The iPhone is a smartphone developed by Apple",
// };
// const { title, price, description } = product;
// console.log(title); // iPhone
// console.log(price); // 999
// console.log(description); // The iPhone is a smartphone developed by Apple

//question 12
// Create an object book with properties title, author, and pages. Create a function getBookDetails that takes a book object as a parameter and returns if the book has more than 100 pages.
// const book = {
//   title: "Harry Potter and the Sorcerer's Stone",
//   author: "J.K. Rowling. ",
//   pages: 500,
// };
// function getBookDetails(book) {
//   if (book.pages > 100) {
//     return true;
//   } else return false;
// }
// console.log(getBookDetails(book));

// question 13
// Create a function changeOccupation that takes an object person and a string newOccupation as parameters, and changes the occupation property of the person object to the newOccupation. Log the person object to the console before and after calling the function.
// const vicky = { name: "vicky", age: 21, occupation: "college student" };
// console.log(vicky);

// function changeOccupation(person, newOccupation) {
//   person.newOccupation = newOccupation;
//   delete person.occupation;
//   return person;
// }
// console.log(changeOccupation(vicky, "webdeveloper"));

// question 14
// Given an array numbers containing the numbers 1, 2, and 3. Use array destructuring to log each number to the console.
// const numbers = [1, 2, 3];
// const [a, b, c] = numbers;

// console.log(a); // logs 1 to the console
// console.log(b); // logs 2 to the console
// console.log(c); // logs 3 to the console

// question15
//Convert the given function into ES6 with least amount of characters.
// function defaultParamsFunc(a, b, c) {
//   if (c === undefined) {
//     c = 4;
//   }
//   return a * b * c;
// }
// ES6+
// const defaultParamsFunc = (a, b, c = 4) => a * b * c;
