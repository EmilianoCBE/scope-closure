//? REasignación y REdeclaracion

//! var
var firstName; //* declaración, se le asigna un valor undefined
firstName = 'Ace'
console.log(firstName)

var lastName = 'Portagas' //* declaración y asignación
lastName = 'Gol' //* REasignación
console.log(lastName)

var secondName = 'Sabo' //* Declaración y asignación
var secondName = 'Luffy' //* REdeclaración y REasignación
console.log(secondName)

//! let
let fruit = 'Apple' //* Declaración y asignación
fruit = 'Orange' //* REasignación
console.log(fruit)

// let fruit = 'Kiwi' //* Con let no se puede redeclarar, pero si reasignar


//! const 
const animal = 'Lizard' //* Declaración y asignación
// animal = 'Dog' //* No se puede reasignar
// const animal = 'Cat' //* No se puede redeclarar
console.log(animal)

const vehices = [] //* array vacío
array.push('KIA') //* se trabaja sobre el arreglo y se puede cambiar aunque sea const
console.log(array)

array.pop()
console.log(array)
