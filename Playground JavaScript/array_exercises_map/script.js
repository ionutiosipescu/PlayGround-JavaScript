// ---> MAP <---

// 1) Make an array of numbers that are doubles of the first array

// function doubleNumbers(arr){
//     let result = arr.map((element) => {
//         return element * 2
//     })
//     return result
//   }
  
//   console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

// 2) Take an array of numbers and make them strings

// function stringItUp(arr){
//     let arrOfStrings = arr.map((element) => {
//         return element.toString()
//     })
//     return arrOfStrings
//   }
  
//   console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

// 3) Capitalize each of an array of names

// function capitalizeNames(arr){
//     let capitalize = arr.map((element) => {
//         let lower = element.toLowerCase()
//         return element.charAt(0).toUpperCase() + lower.slice(1) 
//     })
//     return capitalize
//   }
  
//   console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]


// 4) Make an array of strings of the names

// function namesOnly(arr){
//     let namesOnly = arr.map((element) => {
//         return element.name
//     })
//     return namesOnly
//   }
  
//   console.log(namesOnly([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ])); 
  // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

  
//   5) Make an array of strings of the names saying whether or not they can go to The Matrix

// function makeStrings(arr){
//     let result = arr.map((element) => {

        // Prima varianta cu IF & Else

        // if(element.age >= 18){
        //     return `${element.name} can go to The Matrix`
        // } else {
        //     return `${element.name} is under age ! !`
        // }

        // A 2-a varianta cu Ternary operator

//         let result = element.age >= 18 ? ` can go to The Matrix` : ` is under age ! !`
//         return element.name + result
//     })
//     return result
//   }
  
//   console.log(makeStrings([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ])); 
  // ["Angelina Jolie can go to The Matrix", 
  // "Eric Jones is under age!!", 
  // "Paris Hilton is under age!!", 
  // "Kayne West is under age!!", 
  // "Bob Ziroll can go to The Matrix"]


// 6) Make an array of the names in h1s, and the ages in h2s


// function readyToPutInTheDOM(arr){
//     let result = arr.map((element) => {
//         return `<h1>${element.name}</h1><h2>${element.age}</h2>` 
//     })
//     return result
//   }
//   console.log(readyToPutInTheDOM([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ])); 
  // ["<h1>Angelina Jolie</h1><h2>80</h2>", 
  // "<h1>Eric Jones</h1><h2>2</h2>", 
  // "<h1>Paris Hilton</h1><h2>5</h2>", 
  // "<h1>Kayne West</h1><h2>16</h2>", 
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]

//   7) Square the value of every element in the array. Presume that you will only get numbers in the input array.

// const input = [ 1, 2, 3, 4, 5 ];

// function squareArray(arr) {
//     let result = arr.map((element) => {
//         return element * element
//     })
//     return result
// }

// console.log(squareArray(input))

// 8) The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.

// const input = 'George Raymond Richard Martin';

// function firstInitial(string) {
//    let newArray = string.split(" ")
//    let result = newArray.map((element) => {
//     return element.charAt(0)
//    })
//    return result.join("")
// }

// console.log(firstInitial(input))

//  9) Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.

// const input = [
//     {
//       name: 'John',
//       age: 13
//     },
//     {
//       name: 'Mark',
//       age: 56,
//     },
//     {
//       name: 'Rachel',
//       age: 45,
//     },
//     {
//       name: 'Nate',
//       age: 67,
//     },
//     {
//       name: 'Jeniffer',
//       age: 65,
//     }
//   ];

//   function ageDifference(arr) {
//     let result = arr.map((element) => {
//         return element.age
//     })
//     let min = Math.min(...result)
//     let max = Math.max(...result)
//     return [min, max-min, max] 
//   }

//   console.log(ageDifference(input))

//  10) Devs like to abbreviate everything: k8s means Kubernetes, a11y means accessibility, l10n means localization.
//  You get the Dev numeronyms by taking the first and the last letter and counting the number of letters in between.
//   Words that have less than 4 letters aren't abbreviated, because that would just be odd. The input is a sentence, 
//   and you should abbreviate every word that is 4 letters long or longer. There won't be any punctuation in the sentence.
//    g2d l2k e6e


// 1. input is string --> array of strings
// 2. take the first and the last letters of the word 
// 3. count the letter in between 
// IF --> letter between < 4 
// 4. concatenate first letter + number of letters between + last letter
// Else --> return the word
// Return array of strings to string


// const input = 'Every developer likes to mix kubernetes and javascript';

// function numeronyms(string) {
// let result = string.split(" ").map((element) => {
//     let first = element.charAt(0)
//     let last = element.charAt(element.length - 1)
//     let lettersBetween = element.slice(1, element.length - 1)
//     if(lettersBetween.length >= 3){
//         return first + lettersBetween.length + last
//     } else {
//         return element
//     }
// })
// return result.join(" ")
// }

// console.log(numeronyms(input))

// 11) 

// a) Get an array of all names
// b) Get an array of all heights
// c) Get an array of objects with just name and height properties
// d) Get an array of all first names

const characters = [
  {
      name: 'Luke Skywalker',
      height: '172',
      mass: '77',
      eye_color: 'blue',
      gender: 'male',
  },
  {
      name: 'Darth Vader',
      height: '202',
      mass: '136',
      eye_color: 'yellow',
      gender: 'male',
  },
  {
      name: 'Leia Organa',
      height: '150',
      mass: '49',
      eye_color: 'brown',
      gender: 'female',
  },
  {
      name: 'Anakin Skywalker',
      height: '188',
      mass: '84',
      eye_color: 'blue',
      gender: 'male',
  },
];


// a)

// let result = characters.map(element => element.name)


// b)

// let result = characters.map(element => element.height)



// c)

function getObjects(arr){
  let result = arr.map((element) => {
    let completeArr = element.name.concat(element.height)
    return completeArr
  })
  return result
}



console.log(getObjects(characters))