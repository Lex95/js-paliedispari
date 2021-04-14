var scelta = prompt('Scegli "pari" o "dispari":');
var pari;

if (scelta == "pari") {
    pari = true;
} else if (scelta == "dispari") {
    pari = false;
} else {
    alert("Non hai inserito una parola accettata!");
}

if ((pari == true) || (pari == false)) {
    alert("bella fra");
}