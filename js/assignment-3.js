console.log("--- Page 3 ---");
//Opdracht 3 DOM & function
//Maak deze opdracht zo dat als op de button hieronder geklikt wordt, dat er een prompt tevoorschijn komt waarin je een tweet bericht in typt. 
//Als de gebruiker op OK klikt, dan wordt er een tweet-bericht helemaal onderin weergegeven.

//In JavaScript is een functie createTweet(message) voor jullie voorbereid, maak gebruik van deze functie.


//Add a tweet
//ROC Mondriaan tweets

// Functie om een tweet te creëren
function createTweet(message) {
    return `
        <div class="tweet">
            <div class="avatar">
                <img src="../images/female-avatar.svg" alt="avatar" width="40" height="40">
            </div>
            <div class="message-box">
                <div class="message-content">${message}</div>
            </div>
        </div>
    `;
}

// Selecteer de knop en voeg een event listener toe
const tweetButton = document.querySelector('.bnt-tweet');
tweetButton.addEventListener('click', () => {
    const userInput = prompt("Typ je tweet bericht:");
    if (userInput) {
        const tweetHTML = createTweet(userInput); // Roep de createTweet functie aan met de gebruikersinvoer
        const twitterContainer = document.querySelector('.twitter-container');
        twitterContainer.insertAdjacentHTML('beforeend', tweetHTML); // Voeg de tweet toe aan de container
    }
});