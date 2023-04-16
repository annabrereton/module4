const div = document.querySelector('div')

div.dataset.name = 'ash'
div.dataset.age = 28

console.log(div.dataset.name)
console.log(div.dataset.age)

div.dataset.id = 10
div.dataset.userId = 10

console.log(div.dataset.userId)

const input = document.querySelector('input')
input.setAttribute('name', 'username')

input.classList.add('hidden') // Adds a class to the element
input.classList.remove('hidden') // Removes the class from the element
input.classList.toggle('hidden') // Toggles the class on or off
