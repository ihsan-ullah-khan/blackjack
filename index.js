let firstCard = 10;
let secondCard = 11;

let cards = [firstCard, secondCard]  // array - ordered list of items

let sum = firstCard + secondCard;

let hasBlackJack = false;

let isAlive = true;

let message;

// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")

let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector(".sum-el")

let cardEl = document.getElementById("cards-el")

function startGame()
{
    renderGame()
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

  sumEl.textContent = "Sum: " + sum

  cardEl.textContent = "Card: "
  for (let i = 0; i < cards.length; i += 1)
  {
    cardEl.textContent += cards[i] + " "
  }

  messageEl.textContent = message
  console.log(hasBlackJack);
  console.log(isAlive);
}

function newCard()
{
    let thirdCard = 7

    cards.push(thirdCard)
    sum += thirdCard

    renderGame()
    
}