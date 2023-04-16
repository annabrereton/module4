const formData = {
    username: 'Cuthbert',
    password: 'password132',
    friends: [
        'Hubert',
        'Beatrude'
    ]
}
// Turning the object into a json string
const jsonString = JSON.stringify(formData)

console.log(formData)
console.log(jsonString)

// The stringifyed json object
const jsonData = {"username":"Cuthbert","password":"password132","friends":["Hubert","Beatrude"]}

// Parsing the json string back into an object
const obj = JSON.parse(jsonData)

console.log(obj.username)