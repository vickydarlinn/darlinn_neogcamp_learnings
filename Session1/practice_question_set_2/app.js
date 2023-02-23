//question1
// const person = {
//   name: "ujju",
//   age: 30,
// };
// person.age = 35;
// console.log(person.age); // Output: 35

//question2
// const car1 = { make: "Porsche", model: "911", horsepower: 450 };
// const car2 = { make: "Toyota", model: "Camry", horsepower: 200 };
// const isSportsCar = (car) => (car.horsepower > +300 ? true : false);
// console.log(isSportsCar(car1)); // true
// console.log(isSportsCar(car2)); // false

// question3
// const person1 = { name: "Ajay", age: 14 };
// const person2 = { name: "vicky", age: 22 };
// const isEligible = (person, num) => (person.age + num > 21 ? true : false);
// console.log(isEligible(person1, 1)); // false
// console.log(isEligible(person2, 2)); // true

// question4
// const blog1 = {
//   title: "How to Learn JavaScript",
//   author: "John Doe",
//   views: 1430,
// };
// const blog2 = {
//   title: "10 Reasons to Start a Blog",
//   author: "Jane Smith",
//   views: 500,
// };
// const getViews = (blog) => (blog.views > 1000 ? true : false);
// console.log(getViews(blog1)); // true
// console.log(getViews(blog2)); // false

// qestion5
// let a = 1;
// let b = 2;
// [b, a] = [a, b];
// console.log(a); // 2
// console.log(b); // 1

// question6
// const add = (a = 30, b = 0) => a + b;

// question7
// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// const combineObjects = (ob1, ob2) => ({ ...ob1, ...ob2 });
// const combinedObj = combineObjects(obj1, obj2);
// console.log(combinedObj);

// question8
// function getData(person) {
//   const name = person.name;
//   const address = person.address.city;
//   console.log(name); // John Doe
//   console.log(address); // New York
// }
// my ans
// const getData = function ({ name, address }) {
//   console.log(name);
//   console.log(address.city);
// };
// const person = {
//   name: "John Doe",
//   address: {
//     city: "New York",
//     state: "NY",
//   },
// };
// getData(person);

// question9
// const stringToUpperCase = (str) => str.toUpperCase();
// console.log(stringToUpperCase("hello")); // "HELLO"

// question10
// const concatenateStrings = (str1, str2) => str1.concat("❤️", str2);
// console.log(concatenateStrings("bhanu", "parkash"));

// question 11
// const lastElement = (arr) => arr[arr.length - 1];
// console.log(lastElement([1, 2, 3, 4, 5])); // 5

// question 12
// const firstElement = (arr) => arr[0];
// console.log(firstElement([1, 2, 3, 4, 5])); // 1

// question13
// const sumFirstElement = (arr, num) => arr[0] + num;
// console.log(sumFirstElement([1, 2, 3], 5)); // 6

// question 14
// const sumFirstAndLast = (arr) => arr[0] + arr[arr.length - 1];
// console.log(sumFirstAndLast([1, 2, 3, 4, 8])); // 9

// question 15
const person1 = { name: "John", age: 25, occupation: "Software Engineer" };
const person2 = { name: "Jane", age: 45, occupation: "Data Analyst" };

const personInfo = (person) =>
  `${person.name} is ${person.age} years old ${person.occupation}.`;

console.log(personInfo(person1));
console.log(personInfo(person2));
