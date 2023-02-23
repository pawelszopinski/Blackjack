let firstCard= 10;
let secondCard= 8;
let cards = [firstCard,secondCard]
let cardSum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let startEl = document.getElementById("start-el")
let messageEl = document.getElementById("message-el")
let cardsSum = document.getElementById("sum-el")
let cardsEl =document.getElementById("cards-el")
let newEl = document.querySelector("#new-el")

function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent="Cards:"

    for (i=0;i<cards.length;i++) {
        cardsEl.textContent += " "+ cards[i] + " "
    }


        if (cardSum <= 20) {
            messageEl.textContent = "Draw a card?";
            cardsSum.textContent = "Sum:" + " " + cardSum;
        }
        else if (cardSum === 21) {
            messageEl.textContent = "Victory!!! Blackjack is here!";
            cardsSum.textContent = "Sum:" + " " + cardSum;
            hasBlackJack = true;
        }
        else {
            messageEl.textContent = "Game over. Better luck next time!";
            cardsSum.textContent = "Sum:" + " " + cardSum;
            isAlive = false;
        }
    };
        function thirdcard () {
                 let thirdCard = 3;
                 cardSum +=thirdCard;
                 cards.push(thirdCard);
                 renderGame()
                 
             };
             