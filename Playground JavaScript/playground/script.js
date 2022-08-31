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


const people = [
    { name: "Rohan", age: 18 },
    { name: "Mohan", age: 20 },
    { name: "Shawn", age: 18 },
    { name: "Michael", age: 18 },
    { name: "David", age: 20 },
 ];

 let groupBy = (array, key) => {
    return array.reduce((result, obj) => {
       (result[obj[key]] = result[obj[key]] || []).push(obj);
       return result;
    }, {});
 };

 let a = groupBy(people, "age");
 
 console.log(a)