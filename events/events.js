const button = document.querySelector('button')

button.addEventListener('click', function () {
    const spamBox = document.querySelector('.spamBox')
    spamBox.classList.toggle('hidden')
})

// The above is useful if we only want to select one button.
// If we need to select multiple buttons create a function (e.g. below) and call it
function displaySpamBox() {
    spamBox.classList.toggle('hidden')
}
// When we pass a function into another function as a parameter
// this is called a callback, and we do not add the () after the called function
button.addEventListener('click', displaySpamBox)


const form = document.querySelector('form')
const message = document.querySelector('p')

// form.addEventListener('submit', function (e) { //the 'e' could be called something else but standard practice to call it 'e' to refer to the event
//     e.preventDefault()
//     message.classList.remove('hidden')
// })

// Events have default behaviour. With submit events, the data is submitted and the page reloads
// The '<p class="hidden">Thank you...</p>' message that is un-hidden will therefore flash up/disappear when the page
// reloads. We can prevent this default behaviour by selecting the event (by entering 'e' into the anonymous 'function'
// parameter) and the using e.preventDefault() to interrupt the default behaviour. The 'thank you' message will now
// be visible. To make sure the form data is actually submitted we will need to do some extra steps - to be covered in
// below.
// The below function and addEventListener prevents the default behaviour of the submit button and un-hides the thank
// you message

function displayThankyouMessage(e) {
    e.preventDefault()

    message.classList.remove('hidden')

    const username = document.querySelector('#username')

    username.value = ''
}

form.addEventListener('submit', displayThankyouMessage)

// form.removeEventListener('submit', displayThankyouMessage) // this will remove the event listener
