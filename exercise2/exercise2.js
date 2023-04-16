// [Exercises]
//
// 1. Create an array of objects describing your classmates
// 1. Each object should have the following fields: name, favourite food, hometown
// 2. Use a foreach loop to console log all fields about each classmate
// 3. Update your previous function (console.logging classmate fields) to display
// each stat in a separate ul with li for each student, e.g:
//
// <ul>
// <li>Ash</li>
// <li>Korean Fried Chicken</li>
// <li>Melksham</li>
// </ul>


const personInfo = [
    {
        name: 'Phil',
        favFood: 'sushi',
        hometown: 'Shepton Mallet',
    },
    {
        name: 'James',
        favFood: 'shwarma',
        hometown: 'Tockington',
    },
    {
        name: 'Anna',
        favFood: 'dates',
        hometown: 'Cilcain',
    },
    {
        name: 'Michael',
        favFood: 'pizza',
        hometown: 'St Albans',
    },
    {
        name: 'Henry',
        favFood: 'yoghurt',
        hometown: 'Hong Kong',
    },
    {
        name: 'Dom',
        favFood: 'pizza',
        hometown: 'Bath'
    },
    {
        name: 'Adam',
        favFood: 'burrito',
        hometown: 'Caerphilly',
    },
    {
        name: 'Brent',
        favFood: 'pasta',
        hometown: 'Pretoria',
    },
]

personInfo.forEach(function (person) {
    console.log(person.name)
    console.log(person.favFood)
    console.log(person.hometown)
})

const target = document.querySelector("div")

personInfo.forEach(function (person) {
    target.innerHTML += '<ul><li>' + person.name + '</li><li>' + person.favFood + '</li><li>' + person.hometown + '</li></ul>'
})

const listtags = document.querySelectorAll("li")

listtags.forEach(function (li) {
    console.log('li')
    const currentText = li.textContent
    li.innerHTML = '<strong>' + currentText + '</strong>'
    })





// const classDeets = {
//     person1: {
//         name: 'Phil',
//         favFood: 'sushi',
//         hometown: 'Shepton Mallet',
//     },
//     person2: {
//         name: 'James',
//         favFood: 'shwarma',
//         hometown: 'Tockington',
//     },
//     person3: {
//         name: 'Anna',
//         favFood: 'dates',
//         hometown: 'Cilcain',
//     },
//     person4: {
//         name: 'Michael',
//         favFood: 'pizza',
//         hometown: 'St Albans',
//     },
//     person5: {
//         name: 'Henry',
//         favFood: 'yoghurt',
//         hometown: 'Hong Kong',
//     },
//     person6: {
//         name: 'Dom',
//         favFood: 'pizza',
//         hometown: 'Bath'
//     },
//     person7: {
//         name: 'Adam',
//         favFood: 'burrito',
//         hometown: 'Caerphilly',
//     },
//     person8: {
//         name: 'Brent',
//         favFood: 'pasta',
//         hometown: 'Pretoria',
//     },
// }
//
// console.log(classDeets)
// console.log(typeof classDeets)