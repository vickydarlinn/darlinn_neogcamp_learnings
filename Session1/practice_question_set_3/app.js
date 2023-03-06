// question1
// const formatArray = (arr) =>
//   `The array has ${arr.length} items, and the first item is "${
//     arr[0]
//   }", and the last item is "${arr[arr.length - 1]}".`;
// const items = ["apple", "banana", "orange"];
// const message = formatArray(items);
// console.log(message);

// question2
// const product = {
//   name: "Socks",
//   price: 249,
//   inStock: true,
// };

// const formatProduct = (obj) =>
//   `${obj.name} costs INR ${obj.price} and is${
//     obj.inStock ? "" : " not"
//   } in stock.`;

// const message = formatProduct(product);
// console.log(message);
// Socks costs INR 249 and is in stock.

// question3
// const persons = [
//   { name: "Amay", age: 25 },
//   { name: "Akhil", age: 25 },
//   { name: "ujju", age: 20 },
//   { name: "bhanu", age: 20 },
//   { name: "mohit", age: 21 },
// ];
// function findPerson(arr, name) {
//   const ans = arr.find((el) => el.name === name);
//   return ans ? ans : null;
// }

// question4
// const arr = ["mohit", "bhanu", "ujju", "aman", "vicky"];
// function pickFirstAndSecond(arr) {
//   const [first, second, ...rest] = arr;
//   return {
//     first,
//     second,
//   };
// }
// console.log(pickFirstAndSecond(arr));

//question 5
// function startsWithA(str) {
//     if(str.charAt(0) === 'A') {
//           return true;
//       } else {
//           return false
//       }
//   }

//   my amazing code
// const startsWithA = (str) => (str.charAt(0) === "A" ? true : false);
// console.log(startsWithA("Akshita"));
// // true
// console.log(startsWithA("Jeena"));
// // false

// question 6
// const arr1 = [1, 2, 3, 5, 8];
// const printFirstCharacter = (arr) => arr[0];
// console.log(printFirstCharacter(arr1));

// question 7
// const arr1 = [0, 1, 1, 2, 3, 5, 8];
// function printLastFive(arr) {
//   const ans = [];
//   for (let i = arr.length - 5; i < arr.length; i++) ans.push(arr[i]);
//   return ans;
// }
// console.log(printLastFive(printLastFive(arr1)));

// question 8
// const arr1 = [1, 2, 3, 5, 8];
// const printSecondCharacter = (arr) => arr[1] * 20;
// console.log(printSecondCharacter(arr1));

// question9
// const arr1 = ["Akshay", "Sweta", "Prerana", "Vinay"];
// const sayHello = (arr) => `Hello ${arr[1]}`;
// console.log(sayHello(arr1));

// question10
// function sumOfEvenIndices(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i = i + 2) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }
// console.log(sumOfEvenIndices([2, 4, 3, 7, 1, 5])); // 6
// console.log(sumOfEvenIndices([12, 14, 3, 27, 15, 25])); // 30

// question 11
// const sumFirstTwoElements = (arr) => arr[0] + arr[1];
// console.log(sumFirstTwoElements([10, 4, 3, 7, 1, 5])); // 14
// console.log(sumFirstTwoElements([12, 14, 3, 27, 15])); // 26

// question12
// const printMultipleOfFive = (arr) => arr.find((el) => el % 5 == 0);
// console.log(printMultipleOfFive([7, 4, 10, 7, 5, 3]));

// question13
// const userData = {
//   name: "Jane Doy",
//   postalCode: "12134",
//   city: "Germany",
// };
// function getAddress(obj) {
//   const { postalCode, city } = obj;
//   return {
//     postalCode,
//     city,
//   };
// }
// console.log(getAddress(userData));

// question14
// const userData1 = {
//   name: "Gaurav",
//   postalCode: "12134",
//   country: "Japan",
// };

// const userData2 = {
//   name: "Pritam",
//   postalCode: "560223",
//   country: "India",
// };
// const printData = (obj) => `${obj.name} lives in ${obj.country}`;
// console.log(printData(userData2)); // Pritam lives in India
// console.log(printData(userData1)); // Gaurav lives in Japan

// question 15
// const product = {
//   name: "Apple MacBook Air 2020",
//   specification: {
//     capacity: "256GB",
//     size: "13.3 Inch",
//   },
//   price: 82900,
// };
// const printProductDetails = (obj) =>
//   `${obj.name} which is of ${obj.specification.size}, has a capacity of ${obj.specification.capacity}.`;
// console.log(printProductDetails(product)); // Apple MacBook Air 2020 which is of 13.3 Inch, has a capacity of 256GB.
