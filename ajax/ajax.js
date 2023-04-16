fetch('https://swapi.dev/api/people/1').then(function (response) {
    return response.json()
}).then(function (data) {
    console.log(data)
    console.log(data.birth_year)
})
// Getting data itself is asynchronous - we don't know how long it's going to take. First then block - waiting for data
// to come back. The second then block is waiting for the data to be converted into an object.
// Always have to have the two then blocks.
//  Can only access the data within the second then block.


// This would be the shorthand way to write the above
fetch('https://swapi.dev/api/people/1')
    .then(res => res.json())
    .then(data => {
    console.log(data)
    console.log(data.birth_year)
})

console.log('testing') // this appears first in the console - because of the asynchronous nature of ajax it loads first

// select specific values
fetch('https://swapi.dev/api/people/1')
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        displayCharacter(data)
    })
    .catch(function (error) {
        console.log(Error)
    })

// Targeting the empty heading tags in ajax.html to print the data
function displayCharacter(data) {
    const nameTarget = document.querySelector('.name')
    const hairTarget = document.querySelector('.hair')

    nameTarget.textContent = data.name
    hairTarget.textContent = data.hair_color
}


// Fetch / POST
const info = {
    name: 'cuthbert',
    age: 97
}
// fetch POST takes two parameters. The second parameter includes method, body, headers
fetch('url', {
    method: 'POST',
    body: JSON.stringify(info),
    headers: {
        'content-type': 'application/json'
    }
})
    .then(function (res) {
        return res.json()
    })
    .then(function (data) {
        console.log(data)
    })