// Named function //
function optionOne() {
    console.log('Option one')
}

function greeter(firstName, lastName) {
    console.log('Hello ' + firstName + ' ' + lastName)
}
//can also use return instead of console.log to get a value out of the function
greeter('Ash', 'Coles')


// Anon function
// May sometimes do the below and define a const as an anonymous function
// Anonymous functions are put in a const unless you are using them in a forEach loop
// The result of this is that the value of optionTwo is always a function
// Cannot call an anonymous function (like options 2, 3, 4, 5, 6) before they have been defined
const optionTwo = function () {
    console.log('Option two')
}


// Fat arrow function
const optionThree = () => {
    console.log('Option three')
}

// Can shorten fat arrow function onto a single line if short
const optionFour = () => {console.log('Option four')}
const optionFourB = () => 'Option four' // this is the same as above if you just want to return

// Implicit return - we can drop the return keyword
// and the {} - whatever follows the => is returned
const optionFive = (x, y) => x * y
const example = (x, y) => {return x * y} // this is the same as above

// The below only works if your function has just one parameter
const optionSix = x => x * x

optionOne()
optionTwo()
optionThree()
optionFour()
optionFourB()
optionFive(3, 5)
optionSix(3)


// Arrays
const team = ['a', 'b', 'c', 'd']
console.log(team)

team[1] = 'f'
console.log(team)

team.push('z')
console.log(team)

// Objects
// using const here means we cannot use the assignment operator to change the type
// but CAN change or add to the values
const person = {
    name: 'Ash',
    age: 28,
    carColour: 'grey',
}

console.log(person.name)
person.favFood = 'Korean fried chicken'
console.log(person)

const person2 = {
    name: 'George',
    age: 29,
    carColour: 'grey',
    bestFriend: {
        name: 'Ash',
        age: 28
    }
}

console.log(person2.bestFriend.name) // to access

person2.pet = 'Dog'
console.log(person2.pet)

delete person2.bestFriend
console.log(person2)

const key = 'name'
console.log(person2.key)
console.log(person2[key]) // this will take the value of key (name) and search for the
// associated value to name in the object 'person2', i.e. George


// JavaScript objects are passed by reference
let a = {foo: 'bar'} // this is an object, foo is the key and bar is the value of foo

let b = a  //here b points to a

b.foo = 'yup' // this changes the value of foo to yup

console.log(a)
console.log(b)