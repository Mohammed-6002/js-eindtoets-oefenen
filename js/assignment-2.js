console.log("--- Page 2 ---");
//Opdracht 2 DOM (Document Object Model)
//Hieronder zie je 2 buttons, als je op de add button klikt, dan verschijnt er een prompt waarin de gebruiker gevraagd wordt om een stukje tekst in te vullen. De ingevulde tekst wordt onder de button zichtbaar in een ul-element, zie de html code.

//Als je op de clear-button klikt, dan moeten alle li-items weer verwijderd worden.

//Add message             Clear messages
// 1. Eeste item
// 2. Tweede item
// 3. Derde item

// Selecteer de knoppen en de ul
const addButton = document.querySelector('.btn-add');
const clearButton = document.querySelector('.btn-clear');
const messageList = document.querySelector('.ul-list');

// Voeg een event listener toe aan de addButton
addButton.addEventListener('click', function() {
    const userInput = prompt("Voer een bericht in:");
    if (userInput) {
        const newItem = document.createElement('li');
        newItem.textContent = userInput;
        messageList.appendChild(newItem);
    }
});

// Voeg een event listener toe aan de clearButton
clearButton.addEventListener('click', function() {
    messageList.innerHTML = ''; // Verwijder alle li-items
});