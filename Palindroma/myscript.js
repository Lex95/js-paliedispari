var parola = prompt("Inserisci una parola:");

function isPalindroma(word) {
    var wordReverse = "";
    for (var i = (word.length -1); i >= 0; i--) {
        wordReverse += word[i];
    }
    if (word === wordReverse) {
        return true;
    } else {
        return false;
    }
}

if (parola == "") {
    alert("Non hai inserito nulla!");
}
else {
    var palindroma = isPalindroma(parola);
    if (palindroma) {
        document.getElementById("myId").innerHTML = "La parola " + parola + " è palindroma!";
    } else {
        document.getElementById("myId").innerHTML = "La parola " + parola + " non è palindroma!";
    }
}