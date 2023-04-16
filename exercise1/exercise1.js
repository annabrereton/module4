// [EXERCISE]
// 1. Create an array of your fellow classmates
//   foreach through the array and console.log each of their names
let classmates = ['Anna', 'Michael', 'Brent', 'Adam', 'Dom', 'Henry', 'James', 'Phil']

classmates.forEach (function (classmate) {
    console.log(classmate)
})

// 2. Move your foreach loop into a function and call the function
//    The param of the function should be the array itself
function classLoop(classmates) {
    classmates.forEach (function (classmate) {
        console.log(classmate)
    })
}

classLoop(classmates)

// Stretch goals:
//  1. Only console.log the name if it starts with the letter b
classmates.forEach(function (classmate) {
    if (classmate.startsWith('B')) {
        console.log(classmate)
    }
})

// 2. Create a new function that is given an array as one param, and a letter as the other
//  The function should only console.log items from the array that start with the given letter
function classmateStartsWith(classmates, letter) {
    classmates.forEach(function (classmate) {
        if (classmate.startsWith(letter)) {
            console.log(classmate)
        }
    })
}

classmateStartsWith(classmates, 'M')

// 3. Create a function that aims to compare two arrays (each array just contains strings)
//     1. Two params: array1 and array2
//         1. If array2 contains the same items as array1, return true
//         2. If array1 contains items that are not found in array 2, return false
//     2. The order of the items does not matter
//     3. Array2 can contain items that array1 does not have, but array1 cannot contain items
//     that array2 doesn't have

function compareStrings(a, b) {
    if (a.toString() === b.toString()) {
        console.log ('true')
    } else {
        console.log ('false')
    }
    }

array1 = ['Anna', 'Michael', 'Brent', 'Adam', 'Dom', 'Henry', 'James', 'Phil']
array2 = ['Anna', 'Michael', 'Brent', 'Adam', 'Dom', 'Henry', 'James', 'Phil']
array3 = ['Anna', 'Michael', 'Brent', 'Adam', 'Dom', 'Henry']

compareStrings(array1, array2)
compareStrings(array1, array3)

// if (a.length)

// Ash's 1st solution:
function compare(array1, array2) {
    array1.forEach(value1 => {
         if (valid) {
             let found = false
             array2.forEach(value2 => {
                 if (value1 === value2) {
                     found = true
                 }
         })
             if (!found) {
                 valid = false
             }
        }
    })
    return valid
}

// Ash's solution with a for loop


// Michael's solution
const compares = (array1, array2) => {
    let sum = 0
    array1.forEach(function (i) {
        array2.forEach(function (j) {
            if (i === j) {
                sum++
            }
        })
    })
    console.log(sum === array1.length)
}
