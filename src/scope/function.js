//! Function/local

//? Todas de las funciones tienen su propio aplcance y las variables declaradas dentro 
//? solo puedes ser accesibles dentro de esa función y de cualquiera de sus funciones anidadas
function greeting(){
    let userName = 'Ace'
    console.log(userName)

    //* Función anidada dentro de una función
    if(userName === 'Ace'){
        console.log(`Hello ${userName}!`)
    }
}

greeting()

//! console.log(userName) esto no puede ejecutarse ya que no es una variable asignada global 