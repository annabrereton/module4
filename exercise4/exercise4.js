// Example to help with exercise

const button = document.querySelector('button')

button.addEventListener('click', function (e) {
    e.currentTarget.classList.add('hidden')
})

// [Exercise]
// Return to the last exercise (displaying everyone's names with the fav food data attribute)
// and add an event listener so that when you click on each person, it displays their favourite food in
// a console.log

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

const paragraphs = document.querySelectorAll('p')

paragraphs.forEach(function (paragraph) {
    paragraph.addEventListener('click', function (e) {
        console.log(e.currentTarget.textContent, e.currentTarget.dataset.favFood)
    })
})


// If attribute starts data-... must use dataset and if attribute starts with anything else
// can use getAttribute or setAttribute