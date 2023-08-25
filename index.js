let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message;

// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")

let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector(".sum-el");
let cardEl = document.getElementById("cards-el");

let player = {
  name: "Ihsan",
  chips: 145,
};

let playerEl = document.querySelector("#player-el");

playerEl.textContent = player.name + ": $" + player["chips"]

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber > 10) {
    return 10;
  } else {
    return randomNumber;
  }
}
function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard]; // array - ordered list of items
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card? ";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }

  sumEl.textContent = "Sum: " + sum;

  cardEl.textContent = "Card: ";
  for (let i = 0; i < cards.length; i += 1) {
    cardEl.textContent += cards[i] + " ";
  }

  messageEl.textContent = message;

}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let thirdCard = getRandomCard();

    cards.push(thirdCard);
    sum += thirdCard;

    renderGame();
  }
}
