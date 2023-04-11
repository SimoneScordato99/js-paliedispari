/* 
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma



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
let parolaInp = document.getElementById('parolaInp').value;





let button = document.querySelector('button');
button.addEventListener('click' , function(){
    let parolaInp = document.querySelector('input').value;
    console.log(parolaInp)
    console.log(parolaNormale())
    console.log(parolaReverse())
    // let parola1 = parolaNormale()
    // let parola2 = parolaReverse()
    // console.log(parola1, parola2)
    
    if (parolaNormale().toString() === parolaReverse().toString()) {
        document.writeln('si è palindroma')
    } else {
        document.writeln('non è palindroma')
    }
})
function parolaNormale() {
    let arrayNormale =[]
    let parolaInp = document.getElementById('parolaInp').value;
    for(let i = 0 ; i <parolaInp.length ; i++) {
    
        arrayNormale.push(parolaInp[i])
        
    }
    return arrayNormale
}
function parolaReverse() {
    let arrayReverse =[]
    let parolaInp = document.getElementById('parolaInp').value;
    for(let i = parolaInp.length - 1 ; i >= 0 ; i--) {
    
        arrayReverse.push(parolaInp[i])
        
    }
    return arrayReverse
}






