var scelta = prompt('Scegli "pari" o "dispari":');
var pari;

if (scelta == "pari") {
    pari = 0;
} else if (scelta == "dispari") {
    pari = 1;
} else {
    alert("Non hai inserito una parola accettata!");
}

if ((pari == true) || (pari == false)) {
    var numeroUtente = parseInt(prompt("Inserisci un numero (intero) da 1 a 5:"));
    var numeroAi = Math.ceil(Math.random() * 5);
    if (((numeroUtente + numeroAi) % 2) == pari) {
        document.getElementById("myId").innerHTML = "Hai vinto!";
    } else {
        document.getElementById("myId").innerHTML = "Hai perso!";
    }
    console.log(numeroUtente);
    console.log(numeroAi);
    console.log(numeroUtente + numeroAi);
}