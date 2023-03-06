//question 1
// let array = [4, 78, 8, 3, 6, 0, 12, 34];
// function getMaxElement(arr) {
//   let greatestInt = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (greatestInt < arr[i]) {
//       greatestInt = arr[i];
//     }
//   }
//   return greatestInt;
// }
// console.log(getMaxElement(array));

//question 2
// const calculateAverage = function (arr) {
//   const totalNoOfInt = arr.length;
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum / totalNoOfInt;
// };
// console.log(calculateAverage([1, 2, 3, 4, 5]));

// question 3
// var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const convertEvenToOdd = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       arr[i] = arr[i] + 1;
//     }
//   }
//   return arr;
// };
// console.log(convertEvenToOdd(numArr));
// [1, 3, 3, 5, 5, 7, 7, 9, 9]

// question 4
// function filterWords(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > 5) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }
// var words = ["eat", "sleep", "code", "repeat", "neog", "community"];
// console.log(filterWords(words)); // ["repeat", "community"]

// question5
// const capitalizeWords = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].toUpperCase();
//   }
//   return arr;
// };
// console.log(capitalizeWords(["eat", "sleep", "code", "repeat"]));

// question 6
// function getValues(arr, prop) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(arr[i][prop]);
//   }
//   return result;
// }

// console.log(
//   getValues(
//     [
//       { name: "John", age: 21 },
//       { name: "Mary", age: 22 },
//       { name: "Peter", age: 23 },
//     ],
//     "name"
//   )
// ); // ["John", "Mary", "Peter"]

// question 7
// didnot understand this question.

// question 8
// function checkForTeam(obj) {
//   if (!obj.team) {
//     obj.team = "A";
//   }
//   return obj;
// }
// console.log(checkForTeam({ firstName: "Penn", lastName: "Ma" }));
// // {firstName: 'Penn', lastName: 'Ma', team: A}

// console.log(checkForTeam({ firstName: "John", lastName: "Dee", team: "B" }));
// // {firstName: 'John', lastName: 'Dee', team: B}

// console.log(checkForTeam({ firstName: "Priya", lastName: "Raj" }));
// // {firstName: 'Priya', lastName: 'Raj', team: A}

// question 9
// const book = {
//   title: "JavaScript: The Definitive Guide",
//   authors: [
//     { name: "David Flanagan", age: 49 },
//     { name: "Yukihiro Matsumoto", age: 57 },
//   ],
//   publisher: { name: "O'Reilly Media", location: "CA" },
// };

// const {
//   title,
//   authors: [{ name: author1 }, { name: author2 }],
//   publisher: { name: publisherName },
// } = book;
// console.log(title);
// console.log(author1);
// console.log(author2);
// console.log(publisherName);

// question 10
// const sumOfAges = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let { age } = arr[i];
//     sum = sum + age;
//   }
//   return sum;
// };
// var array = [
//   {
//     name: "Jay",
//     age: 60,
//   },
//   {
//     name: "Gloria",
//     age: 36,
//   },
//   {
//     name: "Manny",
//     age: 16,
//   },
//   {
//     name: "Joe",
//     age: 9,
//   },
// ];

// console.log(sumOfAges(array)); // 121
