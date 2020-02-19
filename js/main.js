//Esercizio 1:
//Chiedere all'utente di inserire la propria mail
//Controllare se è sulla lista (quindi fare una lista di mail valide)
//Stampare un messaggio appropriato
var mail = ['mario.rossi@ciao.it', 'luca.bianchi@ciao.it', 'giovanni.blu@ciao.it', 'daniele.gialli@ciao.it', 'riccardo.bo@ciao.it'];
var inserisciMail = prompt('inserisci la tua email');
    console.log(inserisciMail);
var accettazione = false;

for (var i = 0; i < mail.length; i++) {
    if (mail[i] == inserisciMail) {
        accettazione = true;
    }
}
if (accettazione == true) {
    console.log('sei ammesso');
} else {
    console.log('non sei ammesso');
}
