console.log("--- Page 3 ---");
//Opdracht 3 DOM & function
//Maak deze opdracht zo dat als op de button hieronder geklikt wordt, dat er een prompt tevoorschijn komt waarin je een tweet bericht in typt. 
//Als de gebruiker op OK klikt, dan wordt er een tweet-bericht helemaal onderin weergegeven.

//In JavaScript is een functie createTweet(message) voor jullie voorbereid, maak gebruik van deze functie.


//Add a tweet
//ROC Mondriaan tweets

document.addEventListener('DOMContentLoaded', function() {
    const tweetButton = document.querySelector('#tweetButton'); // Veronderstel dat je button een id heeft
    const tweetsContainer = document.querySelector('#tweetsContainer'); // Container voor tweets

    tweetButton.addEventListener('click', function() {
        const tweetMessage = prompt("Wat wil je tweeten?");
        if (tweetMessage) {
            tweetsContainer.innerHTML += createTweet(tweetMessage);
        }
    });

    function createTweet(message) {
        return `
            <div class="tweet">
                <div class="avatar">
                    <img src="../images/female-avatar.svg" alt="avatar" srcset="" width="40" height="40">
                </div>
                <div class="message-box">
                    <div class="message-content">${message}</div>
                </div>
            </div>
        `;
    }
});