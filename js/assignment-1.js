console.log("--- Page 1 ---");
//Opdracht 1 while-loop & if
//1. Maak een counter variabele die je gebruikt bij de while-loop. Maak een while-loop dat 20 keer “Loop x” uitprint op console log, waarbij x oploopt van 0 t/m 19.

//Binnen de while-loop moet ook de tekst “JavaScript is cool” getoond worden als de loop vaker dan 10 keer geloopt heeft.

//2. Maak een password checker, waarbij de gebruiker een wachtwoord in typt aan de hand van een prompt. Als het wachtwoord klopt, wordt een alert getoond met het bericht "You're authenticated" en anders "Wrong password".

//Als het wachtwoord niet klopt, dan wordt opnieuw om een wachtwoord gevraagd. Dit proces herhaalt tot het wachtwoord correct is.

// Deel 1: While-loop
let counter = 0;
while (counter < 20) {
    console.log(`Loop ${counter}`);
    if (counter > 10) {
        console.log("JavaScript is cool");
    }
    counter++;
}

// Deel 2: Password checker
let correctPassword = "secret123"; // Je kunt dit wachtwoord aanpassen
let userPassword = prompt("Voer uw wachtwoord in:");

while (userPassword !== correctPassword) {
    userPassword = prompt("Wrong password. Probeer opnieuw:");
}

alert("You're authenticated");