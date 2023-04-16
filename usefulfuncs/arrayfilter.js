const numberArray = [1, 2, 3, 4]

// The original implementation
const filteredNumbers = numberArray.filter(function (number) {
    if (number >= 3) {
        return true
    }
    return false
})
//
// // Returning the boolean comparison directly
// const filteredNumbers = numbers.filter(function (number) {
//     return number >= 3;
// })
//
//
// // Using a shorthand fat arrow with the implicit return
// const filteredNumbers = numbers.filter(number => number >= 3)
//



console.log(filteredNumbers)