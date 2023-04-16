square(10, alerter)

square(5, logger)

/**
 *
 * @param x A number to be squared
 * @param toDoNext A callback function to handle the result
 */
function square(x, toDoNext) {  // toDoNext is the callback parameter
    const result = x * x


    toDoNext(result)             // Here we are calling the callback function
}

function logger(data) {
    console.log(data)
}

function alerter(data) {
    alert(data)
}

function displayer(data) {
    const target = document.querySelector('div')
    target.textContent = data
}