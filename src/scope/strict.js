//? Modo estricto
'use strict'

//* Se tiene que declarar y asignar una variable
//var pi //* undefined
pi = 3.1416 //* Solo asignación
console.log(pi)

function myFunction(){
    'use strict';
    return pi = 3.1416
}
console.log(myFunction())