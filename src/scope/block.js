//! Block

//? UN bloque es casi cualquier cosa que esté dentro de {}
function fruits(){
    if(true){
        //* Esto es un bloque
        var fruit1 = 'Apples'
        let fruit2 = 'Kiwi'
        const fruit3 = 'Banana'

        console.log(fruit2)
        console.log(fruit3)
    }

    console.log(fruit1) //* Se imprime porque var se declara como global
    //console.log(fruit2) //* let no se imprime fuera de su scope, solo tiene block scope
    //console.log(fruit3) //* const está en un block scope
    //! const y let solo son reconocidas dentro del mismo scope en el que están
}