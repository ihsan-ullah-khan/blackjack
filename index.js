let firstCard = 10;
let secondCard = 11;

let sum = firstCard + secondCard;

let hasBlackJack = false;

let isAlive = true;

let message;

// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")

let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector(".sum-el")

let cardEl = document.getElementById("cards-el")

function startGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card? ";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }

  sumEl.textContent = "Sum: " + sum

  let cardStr = "Card: " + firstCard + " - " + secondCard

  cardEl.textContent = cardStr
  messageEl.textContent = message
  console.log(hasBlackJack);
  console.log(isAlive);
}