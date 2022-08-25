// ---> FILTER <---

// 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

// function fiveAndGreaterOnly(arr) {
//     let result = arr.filter((element) => {
//         return element >= 5
//     })
//     return result
//   }
//   console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]


// 2) 2) Given an array of numbers, return a new array that only includes the even numbers.

// function evensOnly(arr) {
// let result = arr.filter((element) => {
//    return element % 2 === 0
// })
// return result

// }
  
//   console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]


// 3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length

// function fiveCharactersOrFewerOnly(arr) {
// let result = arr.filter((element) => {
//     return element.length <= 5
// })  
// return result.sort((a, b) => a.length - b.length)
// }

//   console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]


// 4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.


// function peopleWhoBelongToTheIlluminati(arr){
// let result = arr.filter((element) => {
//     return element.member === true
// })
// return result
// }
//   // test
//   console.log(peopleWhoBelongToTheIlluminati([
//       { name: "Angelina Jolie", member: true },
//       { name: "Eric Jones", member: false },
//       { name: "Paris Hilton", member: true },
//       { name: "Kayne West", member: false },
//       { name: "Bob Ziroll", member: true }
//   ]));
  // =>
  //[ { name: 'Angelina Jolie', member: true },
  //  { name: 'Paris Hilton', member: true },
  //  { name: 'Bob Ziroll', member: true } ]


// 5) Make a filtered list of all the people who are old enough to see The Matrix (older than 18)

//   function ofAge(arr){
//     let result = arr.filter((element) => {
     
//     return element.age >= 18
//   })
// return result
// }
//   // test
//   console.log(ofAge([
//       { name: "Angelina Jolie", age: 80 },
//       { name: "Eric Jones", age: 2 },
//       { name: "Paris Hilton", age: 5 },
//       { name: "Kayne West", age: 16 },
//       { name: "Bob Ziroll", age: 100 }
//   ])); 
  // => 
  //[ { name: 'Angelina Jolie', age: 80 },
  //  { name: 'Bob Ziroll', age: 100 } ] 


//   6) If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.

// const input = [ 1, -4, 12, 0, -3, 29, -150];


// function sumOfPositiveNumbers(arr){
// let result = 
// arr
// .filter((element) => {
//     return element > 0
//  })
// .reduce((curentTotal, element) => {
//         return curentTotal + element
//  }, 0)

//  console.log(result)
// }

// sumOfPositiveNumbers(input)

// 7) 
// a) Get characters with mass greater than 100
// b) Get characters with height less than 200
// c) Get all male characters
// d) Get all female characters

// const characters = [
//     {
//         name: 'Luke Skywalker',
//         height: '172',
//         mass: '77',
//         eye_color: 'blue',
//         gender: 'male',
//     },
//     {
//         name: 'Darth Vader',
//         height: '202',
//         mass: '136',
//         eye_color: 'yellow',
//         gender: 'male',
//     },
//     {
//         name: 'Leia Organa',
//         height: '150',
//         mass: '49',
//         eye_color: 'brown',
//         gender: 'female',
//     },
//     {
//         name: 'Anakin Skywalker',
//         height: '188',
//         mass: '84',
//         eye_color: 'blue',
//         gender: 'male',
//     },
// ];

// a)

// function getMassGrater(arr){
// let result = arr.filter((element) => {
//     return element.mass > 100
// })

// return result
// }

// console.log(getMassGrater(characters))


// b)

// function getHeightGrater(arr){
// let result = arr.filter((element) => {
//     return element.height < 200
// })

// return result
// }

// console.log(getHeightGrater(characters))


// c)

// function getMale(arr){
// let result = arr.filter((element) => {
//     return element.gender === "male"
// })

// return result
// }

// console.log(getMale(characters))



// d)

// function getFemale(arr){
// let result = arr.filter((element) => {
//     return element.gender === "female"
// })

// return result
// }

// console.log(getFemale(characters))