console.log("--- Page 2 ---");
//Opdracht 2 DOM (Document Object Model)
//Hieronder zie je 2 buttons, als je op de add button klikt, dan verschijnt er een prompt waarin de gebruiker gevraagd wordt om een stukje tekst in te vullen. De ingevulde tekst wordt onder de button zichtbaar in een ul-element, zie de html code.

//Als je op de clear-button klikt, dan moeten alle li-items weer verwijderd worden.

//Add message             Clear messages
// 1. Eeste item
// 2. Tweede item
// 3. Derde item

document.addEventListener('DOMContentLoaded', function() {
  const addButton = document.querySelector('#addButton'); // Veronderstel dat je button een id heeft
  const clearButton = document.querySelector('#clearButton'); // Veronderstel dat je button een id heeft
  const messageList = document.querySelector('#messageList'); // UL element

  addButton.addEventListener('click', function() {
      const message = prompt("Voer een bericht in:");
      if (message) {
          const listItem = document.createElement('li');
          listItem.textContent = message;
          messageList.appendChild(listItem);
      }
  });

  clearButton.addEventListener('click', function() {
      messageList.innerHTML = ''; // Leeg de lijst
  });
});