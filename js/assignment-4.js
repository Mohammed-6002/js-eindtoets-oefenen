console.log("--- Page 4 ---");

//Opdracht 4 for-loop, array
//In het bijbehorende JavaScript bestand staat een array met klassen (de array mag je niet aanpassen). 
//We willen alle klassen hieronder weergeven behalve "B1Test".

//Zet voor elke klas een li-element omheen en voeg het toe in het ul-element hieronder, doe dit met een functie!

// De gegeven array met klassen
const klassen = ["B1Test", "B1A", "B1B", "B1C", "B1D", "B1E", "B1F"];

// Functie om klassen weer te geven
function displayClasses() {
    const classList = document.createElement('ul'); // Maak een nieuw ul-element

    // Loop door de array van klassen
    for (let i = 0; i < klassen.length; i++) {
        if (klassen[i] !== "B1Test") { // Controleer of de klas niet "B1Test" is
            const listItem = document.createElement('li'); // Maak een nieuw li-element
            listItem.textContent = klassen[i]; // Zet de tekst van het li-element
            classList.appendChild(listItem); // Voeg het li-element toe aan de ul
        }
    }

    // Voeg de ul toe aan de main sectie van de HTML
    document.querySelector('.main').appendChild(classList);
}

// Roep de functie aan om de klassen weer te geven
displayClasses();