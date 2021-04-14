var scelta = prompt('Scegli "pari" o "dispari":');
var pari;

if (scelta == "pari") {
    pari = true;
} else if (scelta == "dispari") {
    pari = false;
} else {
    alert("Non hai inserito una parola accettata!");
}

// generatore randomico di numeri interi da 1 a num
function randomGenerator(num) {
    return Math.ceil(Math.random() * num);
}

// se num è pari restituisce true, altrimenti false
function pariDispari(num) {
    if ((num % 2) == 0) {
        return true;
    } else {
        return false;
    }
}

if ((pari == true) || (pari == false)) {
    var numeroUtente = parseInt(prompt("Inserisci un numero (intero) da 1 a 5:"));
    if (numeroUtente > 5 || numeroUtente < 1 || Number.isNaN(numeroUtente)){
        alert("Numero inserito non valido!");
    } else {
        var numeroAi = randomGenerator(5);
        var parDis = pariDispari(numeroUtente + numeroAi);
        if (parDis == pari) {
            document.getElementById("myId").innerHTML = "Hai vinto!";
        } else {
            document.getElementById("myId").innerHTML = "Hai perso!";
        }
        // controllo da console che il risultato sia corretto
        console.log(numeroUtente);
        console.log(numeroAi);
        console.log(numeroUtente + numeroAi);
    }
}