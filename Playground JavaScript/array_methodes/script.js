// const items = [
//     { name: 'Bike',      price: 100  },
//     { name: 'TV',        price: 200  },
//     { name: 'ALbum',     price: 10   },
//     { name: 'Book',      price: 5    },
//     { name: 'Phone',     price: 500  },
//     { name: 'Computer',  price: 1000 },
//     { name: 'Keyboard',  price: 25   }
// ]

// const itemsNumbers = [1, 2, 3, 4, 5]
// .
// .
// .
// .
// .
// .
// .
// .
// .
//---> FILTER <--- 

// const filterItems = items.filter((item) => {
//     return item.price <= 100
// })

// console.log(filterItems)

// // ---Output---
// [
//     {
//         "name": "Bike",
//         "price": 100
//     },
//     {
//         "name": "ALbum",
//         "price": 10
//     },
//     {
//         "name": "Book",
//         "price": 5
//     },
//     {
//         "name": "Keyboard",
//         "price": 25
//     }
// ]
// .
// .
// .
// .
// .
// .
// .
// .
// .
// ---> MAP <---

//  const itemNames = items.map((item) => {
//         return item.name
//      })

// console.log(itemNames)

// ---Output---

// [
//     "Bike",
//     "TV",
//     "ALbum",
//     "Book",
//     "Phone",
//     "Computer",
//     "Keyboard"
// ]
// .
// .
// .
// .
// .
// .
// .
// .
// .
// ---> FIND <---

//  const foundItem = items.find((item) => {
//         return item.name === 'Book'
//      })

// console.log(foundItem)

// ---Output---

// {
//     "name": "Book",
//     "price": 5
// }
// .
// .
// .
// .
// .
// .
// .
// .
// .
// ---> FOREACH <---

//  items.forEach((item) => {
//         console.log(item.name)
//      })

// ---Output---

// Bike
// TV
// ALbum
// Book
// Phone
// Computer
// Keyboard
// .
// .
// .
// .
// .
// .
// .
// .
// .
// ---> SOME <---

//  const hasInexpensiveItems = items.some((item) => {
//         return item.price <= 100
//      })

// console.log(hasInexpensiveItems)

// ---Output---

// true
// .
// .
// .
// .
// .
// .
// .
// .
// .
// ---> Every <---

//  const hasInexpensiveItems = items.every((item) => {
//         return item.price <= 100
//      })

// console.log(hasInexpensiveItems)

// ---Output---

// false
// .
// .
// .
// .
// .
// .
// .
// .
// .
// ---> REDUCE <---

//  const total = items.reduce((currentTotal, item) => {
//         return item.price + currentTotal
//      }, 0)

// console.log(total)

// ---Output---

// 1840
// .
// .
// .
// .
// .
// .
// .
// .
// .
// ---> INCLUDES <---

//  const includesTwo = itemsNumbers.includes(2)

// console.log(includesTwo)

// ---Output---

// true
// .
// .
// .
// .
// .
// .
// .
// .
// .
// ---> .SET <--- The set() method adds or updates an entry in a Map object with a specified key and a value.
// const map1 = new Map();
// map1.set('bar', 'foo');

// console.log(map1.get('bar'));
// expected output: "foo"

// console.log(map1.get('baz'));
// expected output: undefined
// .
// .
// .
// .
// .
// .
// .
// .
// .
// ---> .HAS <--- return boolean value if element with the specified key exists or not

// const map1 = new Map();
// map1.set('bar', 'foo');

// console.log(map1.has('bar'));
// expected output: true

// console.log(map1.has('baz'));
// .
// .
// .
// .
// .
// .
// .
// .
// .
// ---> .GET <---
// const map1 = new Map();
// map1.set('bar', 'foo');

// console.log(map1.get('bar'));
// expected output: "foo"

// console.log(map1.get('baz'));
// expected output: undefined





// expected output: false
// ---> SLICE <---
// ---> SPLICE <---
// ---> CONCAT <---
// ---> FINDINDEX <---
// ---> DESTRUCTURING <---
// ---> REST <---
// ---> SPREAD OPERATOR <---
// ---> PROMISES <---
// ---> .HAS <---
// ---> .SET <---
// ---> .GET <---
// ---> new Map() <---


// Differences betwen Object and Map()
