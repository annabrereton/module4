// [exercise]
// Using your existing array of student objects, output each student name in a p tag their
// favourite food as a data attribute
// <p data-fav-food="pizza">Dom</p>

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

const div = document.querySelector("div")

personInfo.forEach(function (person) {
    div.innerHTML += '<p data-fav-food="' + person.favFood + '">' + person.name + '</p>'
})

// An alternative to concatenation is to use backticks and $ to make a 'template literal':
// personInfo.forEach(function (person) {
//     div.innerHTML += `<p data-fav-food="${person.favFood}">${person.name}</p>`
// })
