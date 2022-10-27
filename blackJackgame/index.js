let player = {
  name: 'Per',
  chip: 145,
};
let cards = [];
let sum = 0;
let blackjack = false;
let isAlive = false;
let message = '';
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');

let playerEl = document.getElementById('player-el');

playerEl.textContent = player.name + ' : Rs.' + player.chip;

function getrandomeCard() {
  let randomenum = Math.floor(Math.random() * 13) + 1;
  if (randomenum > 10) return 10;
  else if (randomenum === 1) return 11;
  return randomenum;
}

function startGame() {
  isAlive = true;
  let firstcard = getrandomeCard();
  cards.push(firstcard);
  let secondcard = getrandomeCard();
  cards.push(secondcard);
  sum = firstcard + secondcard;
  renderGame();
}
function renderGame() {
  // cardsEl.textContent="Cards: "+cards[0]+" "+cards[1]
  cardsEl.textContent = 'Cards: ';
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + ' ';
  }
  sumEl.textContent = 'Sum: ' + sum;
  if (sum <= 20) {
    message = 'Do you want to draw a new card?';
  } else if (sum == 21) {
    message = 'Wohho! you have got the Blackjack!';
    blackjack = true;
  } else {
    message = "You're out of the game";
    isAlive = false;
  }
  // console.log(message)
  messageEl.textContent = message;
}

function newcard() {
  if (isAlive == true && blackjack == false) {
    let ncard = getrandomeCard();
    cards.push(ncard);
    sum += ncard;
    renderGame();
  }
}
