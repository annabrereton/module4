
// Creating an alert
// setTimeout(function () {
//     alert('Hi')
// }, 3000)


// Cannot cancel the timer unless it is saved in a variable
const timer = setTimeout(function () {
    alert('Hi')
}, 3000)

// cleartimeout will stop the alert
// clearTimeout(timer)

console.log('test')

// Setting an interval counter
const interval = setInterval(function () {
    console.log(i)
    i++
}, 19)

clearInterval(interval)