//? Alcancía con closures

//! Sin closures
function moneyBox(coins){
    let saveCoins = 0
    saveCoins += coins
    console.log(`Money Box: $${saveCoins}`)
}
moneyBox(5)
moneyBox(5) //* No guarda el dato de que tienes 5 en la alcancía, es decir se reinicia


//! Con closures, permite recordar los datos/info guardados

function myMoneyBox(){
    let saveCoins = 0
    function countCoins(coins){
        saveCoins += coins
        console.log(`Money Box: $${saveCoins}`)
    }
    return countCoins //* Se instancia
}

//! Tienen distinto contextos y cada variable tiene su cuenta propia, no se afectan entre sí
const myMoney = myMoneyBox()
myMoney(5)
myMoney(15)
myMoney(25)

const myMoney2 = myMoneyBox()
myMoney2(20)
myMoney2(5)
myMoney2(2)