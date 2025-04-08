console.log("--- Page 4 ---");

//Opdracht 4 for-loop, array
//In het bijbehorende JavaScript bestand staat een array met klassen (de array mag je niet aanpassen). 
//We willen alle klassen hieronder weergeven behalve "B1Test".

//Zet voor elke klas een li-element omheen en voeg het toe in het ul-element hieronder, doe dit met een functie!

document.addEventListener('DOMContentLoaded', function() {
    const klassen = ["B1Test", "B1A", "B1B", "B1C", "B1D", "B1E", "B1F"];
    const klasList = document.querySelector('#klasList'); // UL element

    function displayKlassen() {
        klasList.innerHTML = ''; // Maak de lijst leeg
        for (let i = 0; i < klassen.length; i++) {
            if (klassen[i] !== "B1Test") {
                const listItem = document.createElement('li');
                listItem.textContent = klassen[i];
                klasList.appendChild(listItem);
            }
        }
    }

    displayKlassen(); // Roep de functie aan om de klassen weer te geven
});