//? variables

var a; //* Declaración
var b = 'b' //* Declaración y asignación

b = 'bb' //* Reasignación
var a = 'a' //* Redelaración

//! Global scope
var fruit = 'Apple' //* Global
console.log(fruit)

function bestFruit(){
    console.log(fruit)
}

bestFruit()

function countries(){
    country = 'Mexico' //* Asignación, automáticamente se declara como global
    console.log(country)
}
countries()
console.log(country)