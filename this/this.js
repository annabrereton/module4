// this
// objects in javascript can contain functions

const obj = {
    name: 'Cuthbert',
    age: 73,
    information: function () {
        console.log(this.name)
        console.log(this.age)
    }
}

obj.information()