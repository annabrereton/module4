// Scope in JavaScript - Function level scope with top-down inheritance

function doNoseThing() {
    const nose = 'yes I have a nose' // same with let
}

doNoseThing()

//doesnt work as nose only exists inside the function
console.log(nose)


// There are two levels of scope forEach and addEventLister

const targets = document.querySelectorAll('div')

const box = document.querySelector('.box')

targets.forEach(target => {
    target.addEventListener('click', function () {
        box.classList.toggle('hidden')
    })
})