// function longestWords(str) {
//   let words = str.split(" ");
//   let size = 0;
//   let max = [""];
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length >= size) {
//       size = words[i].length;
//       if (max[max.length - 1].length < words[i].length) {
//         max = [];
//         max.push(words[i]);
//       } else {
//         max = [...max, words[i]];
//       }
//     }
//   }
//   return [...max];
// }

// console.log(longestWords(`I woke up early today`));
// console.log(longestWords(`I went straight to the beach`));

// const people = [
//     { name: "Rohan", age: 18 },
//     { name: "Mohan", age: 20 },
//     { name: "Shawn", age: 18 },
//     { name: "Michael", age: 18 },
//     { name: "David", age: 20 },
//  ];

//  let groupBy = (array, key) => {
//     return array.reduce((result, obj) => {
//        (result[obj[key]] = result[obj[key]] || []).push(obj);
//        return result;
//     }, {});
//  };

//  let a = groupBy(people, "age");

//  console.log(a)
// let daysArray = ["1", "2", "3", "4", "5", "12"];
// let courseHwork = ["4", "8", "15", "16", "23", "42", "12"];

// for (let i = 0; i < courseHwork.length; i++) {
//   for (let j = 0; j < daysArray.length; j++) {
//     if (courseHwork[i] == daysArray[j]) {
//       console.log(`i find you ${courseHwork[i]} --> ${daysArray[j]}`);
//     }
//   }
// }
// function twoSort(s) {
//   return s.sort()[0].split("").join("***");
// }

// console.log(twoSort(["bitcoin", "altceva", "ceva"]));

// let ceva = Array.apply(null, {length: 100}).map((value, index) => index + 1);

// const arr = n => Array.from({length: n}, (_, i) => i);

// console.log(arr(4))

// function solution(number){
//    let sum = 0
//   for(let i = 1 ; i < number ; i++){
//    if(i % 3 === 0 || i % 5 === 0){
//       sum += i
//    }
//   }
//   return sum
// }

// console.log(solution(10))

// function reverseWords(str){
//    return str.split(" ").reverse().join(' ')
//  }

//  console.log(reverseWords("hello world!"))

// function removeExclamationMarks(s) {
//    // .map((element) => element.replace("!", '')).join(" ")
//    return s.split("").map((element) => element.replace("!", '')).join("")

// }

//  console.log(removeExclamationMarks("Hello World!!"))

// function countBy(x, n) {
//    let z = [];
//    for(let i = 1; i <= x * n ; i++) {
//       if(i % x === 0){
//          z.push(i)
//       }
//    }
//    return z;
//  }

//  console.log(countBy(2,5))

// function remove(string) {
//    let newArr = string.split(" ")
//    let lastChart = newArr[newArr.length - 1].slice(0, -1)
//    let result = lastChart[0] + lastChart
//    console.log(result)
// return string.split("").map((element) => element.replace("!", '')).join("")
// return string.slice(0, -1)
// let result = string[string.length - 1].replace("!", '')
// let test = string.split("").pop()
// return arguments[Object.keys(arguments).pop()].slice(0, -1)
//   console.log(string[string.length - 1])
//   console.log(test2)
// }

// console.log(remove("hi!!! hi!"))

// function typeValidation(variable, type) {
//   if (typeof variable === type) {
//     return true;
//   } else {
//     return false;
//   }
// }
// function typeValidation(variable, type) {
//   return typeof variable === type;
// }

// console.log(typeValidation(42, "number"));
// // true
// console.log(typeValidation("42", "number"));
// // false

// function grow(x) {
//   let result = x.reduce((curr, element) => {
//     console.log(curr);
//     return curr * element;
//   });
//   console.log(result);
//   return result;
// }

// grow([2, 2, 2, 2, 2, 2]);

// function SubtractSum(n) {
//   //   return n
//   //     .toString()
//   //     .split("")
//   //     .reduce((a, b) => parseInt(a) + parseInt(b));
//   let arr = n
//     .toString()
//     .split("")
//     .map((element) => parseInt(element));
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   //   console.log(arr);
//   console.log(sum);
// }

// SubtractSum(10);
// "apple"

// n = 325
// sum = 3+2+5 = 10
// n = 325-10 = 315 (not in the list)
// sum = 3+1+5 = 9
// n = 315-9 = 306 (not in the list)
// sum = 3+0+6 = 9
// n =306-9 = 297 (not in the list)

//  nu a functionat de refacut

// function rowSumOddNumbers(n) {
//   let arr = [];
//   let sum = 0;
//   for (let i = arr.length; i < n * 2; i++) {
//     if (i % 2 === 1) {
//       arr.push(i);
//     }
//     // console.log(i);
//   }
//   for (let j = 0; j < arr.length; j++) {
//     sum += arr[j] + (n + n);
//     console.log(j);
//   }
//   console.log(arr);
//   return sum;
// }

// // rowSumOddNumbers(2)
// console.log(rowSumOddNumbers(2));

//  Prima Varianta
// function alternate(n, firstValue, secondValue) {
//   let arr = [];
//   for (let i = arr.length; i < n; i++) {
//     arr.push(i % 2 === 0 ? firstValue : secondValue);
//   }
//   return arr;
// }

// alternate(5, true, false);

//  Cea mai scurta varianta
// function alternate(n, firstValue, secondValue) {
//   return Array.from({ length: n }, (_, i) =>
//     i % 2 === 0 ? firstValue : secondValue
//   );
// }
// console.log(alternate(5, true, false));

// function ceva(n) {
//   return Array.from({ length: n }, (_, i) => console.log(i + 1));
// }
// ceva(10);

// function barista(coffees) {
//   return coffees.reduce((curr, el) => {
//     return curr + el * 2 + 2;
//   }, 0);
// }

// let first = true;

// function barista(coffees) {
//   let sum = 0;
//   for (let prop of coffees) {
//     if (coffees.hasOwnProperty(prop)) {
//       if (first) {
//         first = false;
//         sum += prop + 2;
//       }
//       sum += prop * 2 + 2;
//     }
//   }
//   return sum;
// }

// function barista(coffees) {
//   let first = true;
//   let coffeesSorted = coffees.sort()
//   let sum = 0;
//   for (let i = 0; i < coffeesSorted.length; i++) {
//     let coffe = coffeesSorted[i]
//     if (first) {
//       first = false;
//       sum += coffe + 2;
//     } else {
//       sum += coffe * 2  + 2;
//     }
//   }
//   return sum;
// }

// console.log(barista([2,10,5,3,9]));

// 4
// 4 + 2 + 3 = 9
// 9 + 2 + 2 = 13

// final 4 + 9 + 13 = 26

// 2
// 2 + 2 + 3 = 7
// 7 + 2 + 4 = 13

// 2 + 7 + 13 = 22

function i(word) {
  let vocale = ["a", "e", "i", "o", "u"];
  let iWord = "I";
  let arr = word.split("");
  let arrVocale = [];

  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = 0; j < vocale.length; j++) {
  //     if (arr[i].toLowerCase() === vocale[j]) {
  //       arrVocale.push(arr[i].toLowerCase());
  //     }
  //   }
  // }

  // return arr[0] === iWord ||
  //   arr[0] === arr[0].toLowerCase() ||
  //   arrVocale.length * 2 === arr.length
  //   ? console.log("Invalid word !❌")
  //   : finalword;

  // if (
  //   arr[0] === iWord ||
  //   arr[0] === arr[0].toLowerCase() ||
  //   arrVocale.length * 2 === arr.length
  // ) {
  //   return `shit`;
  // } else {
  //   return "ceva";
  // }
}

//
// i("Phone");
// i("World");
// i("Inspire");
i("East");
// i("road");

// no number equal of vocale si consoane like : east
// no string with lowercase
// no string with I start

// console.log("ceva");

// maybe use While loop or find other solution then 2 for !
