/* 

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.



Consigli del giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.


*/
let numero = parseInt(document.querySelector('input').value)
let selezione = document.querySelector('select').value
let bottone = document.querySelector('#btn')

bottone.addEventListener('click', function(){
    let numero = parseInt(document.querySelector('input').value)
    let somma = numero + randomNumber()
    
    console.log(somma)


    let selezione = document.querySelector('select').value
    if(somma % 2 == 0 && selezione == 'P'){
        console.log('hai vinto')
    } else if(somma % 2 == 0 && selezione == 'D') {
        console.log('ha vinto il pc')
    } else if(somma % 2 != 0 && selezione == 'P') {
        console.log('ha vinto il pc')
    } else if(somma % 2 != 0 && selezione == 'D') {
        console.log('hai vinto')
    }
})




function randomNumber() {
    return parseInt(Math.floor(Math.random()*5)+1)
}








