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

// function i(word) {
//   let vocale = ["a", "e", "i", "o", "u"];
//   let iWord = "i";
//   let arr = word.split("");
//   let arrVocale = [];
//   let finalword = iWord.concat(word);

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < vocale.length; j++) {
//       if (arr[i].toLowerCase() === vocale[j]) {
//         arrVocale.push(arr[i].toLowerCase());
//       }
//     }
//   }

//   console.log(arrVocale);

//   if (
//     arr[0] === iWord.toUpperCase() ||
//     typeof arr[0] === "undefined" ||
//     arr[0] === arr[0].toLowerCase() ||
//     arrVocale.length * 2 >= arr.length
//   ) {
//     return "Invalid word !❌";
//   } else {
//     return finalword;
//   }
// }

//
// console.log(i("Phone"));
// i("World");
// i("Inspire");
// i("East");
// i("road");
// console.log(i("Peace"));

// no number equal of vocale si consoane like : east
// no string with lowercase
// no string with I start

// console.log("ceva");

// maybe use While loop or find other solution then 2 for !

// function removeUrlAnchor(url) {
//   let link = url.split("");
//   let checkHash = link.findIndex((el) => el === "#");
//   let result = [];
//   let findHash = link.map((element, index, arr) => {
//     if (checkHash === -1) {
//       result.push(element);
//     } else if (element === "#") {
//       for (let i = 0; i < index; i++) {
//         result.push(arr[i]);
//       }
//     }
//   });
//   return result.join("");
// }

// function removeUrlAnchor(url) {
//   return url.split("#")[0];
// }

// console.log(removeUrlAnchor("www.codewars#.comabout"));



// function XO(str) {
//   let arr = str.split("")
//   let arrX = []
//   let arrO = []
  
//   arr.map((element) => {
//     if(element.toLowerCase() === "x") {
//       arrX.push(element)
//     }else if (element.toLowerCase() === "o"){
//       arrO.push(element)
//     }
//   })
  
//   return arrX.length === arrO.length ? true : false
  // if(arrX.length === arrO.length) {
  //   return true
  // } else return false

  // console.log(result)
// }



// console.log(XO(''));
// (XO("xxOo"),true);
// (XO("xxxm"),false);
// (XO("Oo"),false);
// (XO("ooom"),false);


// const orderedCount = function (text) {
  
//   let obj =[];
//   for(let s of text)
//   if(!obj[s])
//   obj[s] = 1;
//   else 
//   obj[s] = obj[s]  + 1;
//   return obj
// }

// console.log(orderedCount("abracadabra"))




// The string
// var str = "I want to count the number of occurrences of each char in this string";

// // A map (in JavaScript, an object) for the character=>count mappings
// var counts = {};

// // Misc vars
// var ch, index, len, count;

// // Loop through the string...
// for (index = 0, len = str.length; index < len; ++index) {
//     // Get this character
//     ch = str.charAt(index); // Not all engines support [] on strings

//     // Get the count for it, if we have one; we'll get `undefined` if we
//     // don't know this character yet
//     count = counts[ch];

//     // If we have one, store that count plus one; if not, store one
//     // We can rely on `count` being falsey if we haven't seen it before,
//     // because we never store falsey numbers in the `counts` object.
//     counts[ch] = count ? count + 1 : 1;
// }

// for (ch in counts) {
//   console.log(ch + " count: " + counts[ch]);
// }

// let s = 'hello';
// var result = [...s].reduce((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a }, []); 
// console.log(result); // {h: 1, e: 1, l: 2, o: 1}

// let str = "atul kumar srivastava";
// let obj =[];
// for(let s of str)if(!obj[s])obj[s] = 1;else obj[s] = obj[s]  + 1;
// console.log(obj)



// const map = new Map();
// for (const k of s.split('')) {
//   map.set(k, map.has(k) ? map.get(k) + 1 : 1);
  /* // or
  if (map.has(k)) {
    map.set(k, map.get(k) + 1); // increment
  } else {
    map.set(k, 1);              // first one
  }
  */
// }


  // console.log(orderedCount("abracadabra"))


//   const map1 = new Map();
// map1.set('bar', 'foo');

// console.log(map1.has('barr'));

let zoo = new Map()

zoo.set('Zebra', 5)
zoo.set('Gorila', 2)
zoo.set('Monkey', 76)


let zebraCount = zoo.get('Zebra')

for(let [key, value] of zoo){
  console.log(`${key} : ${value}`)
}


// console.log(zebraCount)