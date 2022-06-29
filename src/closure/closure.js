//? Closures

function greeting(){
    let userName = 'Ace'

    function displayUserName(){
        return `Hello ${userName}`
    }
    return displayUserName
}

const g = greeting() //* Como si 'g' fuera displayUserName
console.log(g) //* Retorna la definición que tiene displayUserName
console.log(g()) //* Se ejecuta y se entrega el valor `Hello Ace` y recuerda el contexto

