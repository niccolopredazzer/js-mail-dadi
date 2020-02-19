//Esercizio 2
//confrontare quale tra due numeri casuali è il più grande
//Per prima cosa uso due variabili che fungono da dadi usando random
//Dopo dobbiamo determinare quale dei due numeri sia maggiore

var dadoUno = Math.floor(Math.random() * 6) +1;
    console.log(dadoUno);
    document.getElementById('primo-dado').innerHTML = 'Il primo dado ha come risultato: ' + dadoUno;
var dadoDue = Math.floor(Math.random() * 6) +1;
    console.log(dadoDue);
    document.getElementById('secondo-dado').innerHTML = 'Il secondo dado ha come risultato: ' + dadoDue;

if (dadoUno > dadoDue) {
    console.log('vince il primo dado');
    document.getElementById('esito').innerHTML = 'Vince il primo dado'
} else if (dadoUno == dadoDue) {
    console.log('pareggio, tirate di nuovo');
    document.getElementById('esito').innerHTML = 'Pareggio, tirate di nuovo'
} else {
    console.log('vince il secondo dado');
    document.getElementById('esito').innerHTML = 'Vince il secondo dado'
}
