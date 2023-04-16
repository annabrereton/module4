//Interacting with the DOM
// the below creates a const containing our h1 heading
const heading = document.querySelector('h1') // can use any selector that we would use in css

// An example of the manipulation we can do with querySelector is change the text
heading.textContent = 'Greyhounds rule!'  // testContent is a property

// querySelector only ever gives a single (first) result. for multiple targets we need to use querySelectorAll
const headings = document.querySelectorAll('h2')

console.log(headings)

headings.forEach(function (heading) {
    heading.textContent = 'Greyhounds rule!' //changes h2's to say Greyhounds rule!
})

headings.forEach(function (heading) {
    heading.style.color = 'red' // changes colour of h2's to red
})

headings.forEach(function (heading) {
    heading.innerHTML = 'red' // changes the contents of the h2's to say 'red'
})

headings.forEach(function (heading) {
    let currentText = heading.textContent
    heading.innerHTML = '<em>' + currentText + '</em>' // changes the contents of the h2's to italics
})

headings.forEach(function (heading) {
    heading.innerHTML += ' red' // changes the contents of the h2's to say 'red red'
})