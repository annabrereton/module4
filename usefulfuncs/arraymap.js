const numbers = [1, 2, 3, 4]

// Both examples are functionally the same
// Map provides a cleaner alternative to forEach
const result = numbers.map(function (number) {
    return number * 2
})

console.log(result)

// // We can also make use of fat arrow functions to make this even more compact
// const result = numbers.map(x => x * 2)
//
// console.log(result)
//
//
// // The same as above, but using forEach
// let result = []
//
// numbers.forEach(function (number) {
//     result.push(number * 2)
// })

console.log(result)