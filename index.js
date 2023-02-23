let firstCard= 10;
let secondCard= 21;
let cardSum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "" 
//let startEl = document.getElementById("start-el");
let messageEl = document.getElementById("message-el")
let cardsSum = document.getElementById("sum-el")
let cardsEl =document.getElementById("cards-el")
function start() { 
 if(cardSum <= 20) {
     cardsEl.textContent = firstCard + " | " + secondCard;
     messageEl.textContent = "Draw a card?"
     cardsSum.textContent = "Sum:"+" "+cardSum;
     }
    else if (cardSum ===21) {
         cardsEl.textContent = firstCard + " | " + secondCard;
        messageEl.textContent= "Victory!!! Blackjack is here!"
        cardsSum.textContent = "Sum:"+" "+cardSum;
        hasBlackJack=true
      }
        else {
             cardsEl.textContent = firstCard + " | " + secondCard;
            messageEl.textContent = "Game over. Better luck next time!"
       cardsSum.textContent = "Sum:"+" "+cardSum;         
            isAlive = false;
        }
        console.log(hasBlackJack)
    console.log(isAlive)
    console.log(message)
        };