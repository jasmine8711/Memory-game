const container = document.getElementById("container");
const cards = document.querySelectorAll(".card");
const cardsBox = Array.prototype.slice.call(cards);

const cardBacks = document.querySelectorAll(".front");
const cardImgs = document.querySelectorAll(".back");
const startBtn = document.querySelector("#startbtn");
const point = document.getElementById("point");
const text = document.getElementById("text");
let score = 0;

//console.log(cardBack);
startBtn.addEventListener("click", showCard);
function showCard() {
  newFoodsOrder();
  cards.forEach(x => {
    x.classList.toggle("flipped");
    setTimeout(() => {
      x.classList.remove("flipped");
    }, 2000);
  });
}

//Fisher–Yates shuffle
function shuffle(array) {
  var i = 0,
    j = 0,
    temp = null;
  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

//put new order in html
function newFoodsOrder() {
  const newFoods = shuffle(cardsBox);
  for (let i = 0; i < 10; i++) {
    container.appendChild(newFoods[i]);
  }
}

let flipped = false;
let lockBoard = false;
let firstCard;
let secondCard;
function matching() {
  if (lockBoard) {
    return;
  }
  this.classList.toggle("flipped");

  if (!flipped) {
    flipped = true;
    firstCard = this;
    return;
  } else {
    flipped = false;
    secondCard = this;
    console.log(cardsBox.indexOf(firstCard), secondCard.dataset.name);
    checkMatch();
  }
}

function checkMatch() {
  if (cardsBox.indexOf(firstCard) == cardsBox.indexOf(secondCard)) {
    console.log("you can't click twice!");
    text.innerText = "you can't click twice!";
  } else if (firstCard.dataset.name === secondCard.dataset.name) {
    disableCard();
    score += 1;
    point.innerText = score;
    text.innerText = "you win!";
    console.log("win");
  } else {
    unFlipCard();
    console.log("lost");
    text.innerText = "you lost!";
  }
  function disableCard() {
    firstCard.removeEventListener("click", matching);
    secondCard.removeEventListener("click", matching);
    resetBoard();
  }
  function unFlipCard() {
    lockBoard = true;
    setTimeout(() => {
      firstCard.classList.remove("flipped");
      secondCard.classList.remove("flipped");
      resetBoard();
    }, 2000);
  }
}
function resetBoard() {
  [flipped, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}
cards.forEach(x => {
  x.addEventListener("click", matching);
});

(function test() {
  startBtn.innerText = "what?";
})();
