//? Hoisting

// var nameOfDog //* el hoisting declara una variable que no ha sido declarada antes de su llamado
console.log(nameOfDog) //* undefined

var nameOfDog = 'Elbaf'
console.log(nameOfDog)


//! Con funciones
//* Las funciones se pueden llamar antes de su creación
nameDog(); //* Llamada de función

function nameDog(){
    console.log(`El mejor perrito es ${elmo}`)
}

var elmo = 'Elmo' //* Si esto se quita si daría un error de referencia y no sería undefined

