var scelta = prompt('Scegli "pari" o "dispari":');
var pari;

if (scelta == "pari") {
    pari = 0;
} else if (scelta == "dispari") {
    pari = 1;
} else {
    alert("Non hai inserito una parola accettata!");
}

function randomGenerator(num) {
    return Math.ceil(Math.random() * num);
}

function pariDispari(num) {
    if ((num % 2) == 0) {
        return 0;
    } else {
        return 1;
    }
}

if ((pari == true) || (pari == false)) {
    var numeroUtente = parseInt(prompt("Inserisci un numero (intero) da 1 a 5:"));
    if (numeroUtente > 5 || numeroUtente < 1 || Number.isNaN(numeroUtente)){
        alert("Numero inserito non valido!")
    } else {
        var numeroAi = randomGenerator(5);
        var parDis = pariDispari(numeroUtente + numeroAi);
        if (parDis == pari) {
            document.getElementById("myId").innerHTML = "Hai vinto!";
        } else {
            document.getElementById("myId").innerHTML = "Hai perso!";
        }
        console.log(numeroUtente);
        console.log(numeroAi);
        console.log(numeroUtente + numeroAi);
    }
}