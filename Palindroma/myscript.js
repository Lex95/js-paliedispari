var parola = prompt("Inserisci una parola:");
var parolaContr = "";

if (parola == "") {
    alert("Non hai inserito nulla!");
}
else {
    for (var i = (parola.length -1); i >= 0; i--) {
        parolaContr += parola[i];
    }
    if (parola === parolaContr) {
        document.getElementById("myId").innerHTML = "La parola " + parola + " è palindroma!";
    } else {
        document.getElementById("myId").innerHTML = "La parola " + parola + " non è palindroma!";
    }
}