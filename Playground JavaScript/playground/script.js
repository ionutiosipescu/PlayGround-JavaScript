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
// "apple"





const fruits = {
   1 : 'kiwi',
   2 : 'pear',
   3 : 'kiwi',
   4 : 'banana',
   5 : 'melon',
   6 : 'banana',
   7 : 'melon',
   8 : 'pineapple',
   9 : 'apple',
   10 : 'pineapple',
   11 : 'cucumber',
   12 : 'pineapple',
   13 : 'cucumber',
   14 : 'orange',
   15 : 'grape',
   16 : 'orange',
   17 : 'grape',
   18 : 'apple',
   19 : 'grape',
   20 : 'cherry',
   21 : 'pear',
   22 : 'cherry',
   23 : 'pear',
   24 : 'kiwi',
   25 : 'banana',
   26 : 'kiwi',
   27 : 'apple',
   28 : 'melon',
   29 : 'banana',
   30 : 'melon',
   31 : 'pineapple',
   32 : 'melon',
   33 : 'pineapple',
   34 : 'cucumber',
   35 : 'orange',
   36 : 'apple',
   37 : 'orange',
   38 : 'grape',
   39 : 'orange',
   40 : 'grape',
   41 : 'cherry',
   42 : 'pear',
   43 : 'cherry',
   44 : 'pear',
   45 : 'apple',
   46 : 'pear',
   47 : 'kiwi',
   48 : 'banana',
   49 : 'kiwi',
   50 : 'banana',
   51 : 'melon',
   52 : 'pineapple',
   53 : 'melon',
   54 : 'apple',
   55 : 'cucumber',
   56 : 'pineapple',
   57 : 'cucumber',
   58 : 'orange',
   59 : 'cucumber',
   60 : 'orange',
   61 : 'grape',
   62 : 'cherry',
   63 : 'apple',
   64 : 'cherry',
   65 : 'pear',
   66 : 'cherry',
   67 : 'pear',
   68 : 'kiwi',
   69 : 'pear',
   70 : 'kiwi',
   71 : 'banana',
   72 : 'apple',
   73 : 'banana',
   74 : 'melon',
   75 : 'pineapple',
   76 : 'melon',
   77 : 'pineapple',
   78 : 'cucumber',
   79 : 'pineapple',
   80 : 'cucumber',
   81 : 'apple',
   82 : 'grape',
   83 : 'orange',
   84 : 'grape',
   85 : 'cherry',
   86 : 'grape',
   87 : 'cherry',
   88 : 'pear',
   89 : 'cherry',
   90 : 'apple',
   91 : 'kiwi',
   92 : 'banana',
   93 : 'kiwi',
   94 : 'banana',
   95 : 'melon',
   96 : 'banana',
   97 : 'melon',
   98 : 'pineapple',
   99 : 'apple',
   100 : 'pineapple'
 }


// function SubtractSum(n) {

// let condition = false 

// while(condition === false){

// let result = n
// .toString()
// .split("")
// .reduce((a, b) => parseInt(a) + parseInt(b));

// let apple = result % 9 === 0 
// let x = 0

// if(apple === true){
//    return "apple"
//    condition = true
// } else {
//    x = n - result
//    n = x
// }

// }

// }

// console.log(SubtractSum(10))


// FUNCTION FOR FRUITS OBJECT !!!


// function SubtractSum(n, fruit) {

// let condition = false 

// while(condition === false){

// let result = n
// .toString()
// .split("")
// .reduce((a, b) => parseInt(a) + parseInt(b));

// let x = 0
// x = n - result

// if(fruit === true){
//    return "apple"
//    condition = true
// } else {
//    n = x
// }

// }

// }

// console.log(SubtractSum(10, "apple"))




