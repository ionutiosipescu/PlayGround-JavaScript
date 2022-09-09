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


// const map = new Map([
//     [1, 'one'],
//     [2, 'two'],
// ])

// const obj = {
//     1: 'one',
//     2: 'two',
// }

// console.log({map, obj})

// Set

// map.set(3, 'three')
// obj[3] = 'three'

// Get

// console.log('map get', map.get(3))
// console.log('obj get', obj[3])

// Delete

// map.delete(3)
// delete obj[3]

// console.log({map, obj})

// Keys

// console.log('map keys', map.keys())
// console.log('obj keys', Object.keys(obj))

// Has

// console.log('map has key 1', map.has(2))
// console.log('obj has key 1', 2 in obj)
// console.log('obj has key 1', obj.hasOwnProperty(2))

// Values

// console.log('map values', map.values())
// console.log('obj values', Object.values(obj))

// Entries

// console.log('map entries', map.entries())
// console.log('obj entries', Object.entries(obj))

// Length

// console.log('map size', map.size)
// console.log('obj size', Object.keys(obj).length)

// Iteration for

// for (const [key, value] in map) {
//     console.log({key, value})
// }

// for(const [key, value] of Object.entries(obj)) {
//     console.log({key, value})
// }

//  Iteration forEach

// map.forEach((value, key) => console.log({key, value}))
// Object.entries(obj).forEach(([key, value]) => console.log({key, value}))

// Swap Keys & Values

// const swapMap = Array.from(map).reduce(
//     (acc, [key, value]) => acc.set(value, key),
//     new Map()
//     )

// const swapObj = Object.entries(obj).reduce(
//     (acc, [key, value]) => ({...acc, [value] : key }), 
//     {}
//     )

// console.log({swapMap, swapObj})