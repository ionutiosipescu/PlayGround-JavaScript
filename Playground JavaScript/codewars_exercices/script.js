// function sameCase(a, b){
// if(a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()){
//    return -1
//  }else if(a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()){
//      return 1
//  }else{
//    return 0
//  }
// console.log(`this is a big ${a.toUpperCase()} and this is small ${a.toLowerCase()}`)
//    }

//    console.log(sameCase('C', 'B'));
//    doTest('b', 'a', 1);
//    doTest('d', 'd', 1);
//    doTest('A', 's', 0);
//    doTest('c', 'B', 0);
//    doTest('b', 'Z', 0);
//    doTest('\t', 'Z', -1);
//    doTest('H', ':', -1);

// const flip=(x, r)=>{
// if(x === "R"){
//     let arrR = r.sort((a, b) => a - b);
//     return arrR
// }else if(x === "L") {
//     let arrL = r.sort((a, b) => b - a);
//     return arrL
// }
//   }

// console.log(flip('L', [3, 2, 1, 2]))

// function warnTheSheep(queue) {
// for(let i = queue.length - 1 ; i >= 0  ; i--){
//     if(queue[i] === "wolf" && queue.length - 1 === i){
//         console.log(`Pls go away and stop eating my sheep`)
//     }
//     else if(queue[i] === "wolf"){
//         console.log(`Oi! Sheep number ${(queue.length - i) - 1}! You are about to be eaten by a wolf!`)
//     }
// }
// }

// warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"])
// warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]);
// warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]);
// warnTheSheep(["sheep", "wolf", "sheep"]);
// warnTheSheep(["wolf"]);
// warnTheSheep(["sheep", "sheep", "wolf"]);

// let countSheep = function (num) {
//   let newArr = [];
//   for (let i = 0; i < num; i++) {
//     newArr.push(`${i + 1} sheep...`);
//   }
//   return newArr.join("");
// };

// console.log(countSheep(3));

// function abbrevName(name) {
//   let newArr = name
//     .split(" ")
//     .map((element) => element.charAt(0).toUpperCase().concat("."));

//   return newArr[0].concat(".", newArr[1]);
// }

// console.log(abbrevName("Sam Harris"));

// function pillars(numPill, dist, width) {
//   let result = (numPill - 1) * dist * 100 + (numPill - 2) * width;
//   return result;
// }

// console.log(pillars(2, 20, 25));
