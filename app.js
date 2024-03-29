const container = document.getElementById("container");
const cards = document.querySelectorAll(".card");
const cardsBox = Array.prototype.slice.call(cards);

const cardBacks = document.querySelectorAll(".front");
const cardImgs = document.querySelectorAll(".back");
const startBtn = document.querySelector("#startbtn");
const point = document.getElementById("point");
const text = document.getElementById("text");

//console.log(cardBack);
startBtn.addEventListener("click", showCard);
//show all the card
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
  for (let i = 0; i < cardsBox.length; i++) {
    container.appendChild(newFoods[i]);
  }
}

let flipped = false;

let lockBoard = false;
let firstCard;
let secondCard;
function matching() {
  //console.log(this);
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
const body = document.getElementsByTagName("body")[0];

body.addEventListener("keyup", getKeyAndMove);

let index;
let isFirstMove = true;
let isEnterOnce = true;
////let isEnterTwice = true;
function getKeyAndMove(event) {
  // console.log("press");

  var x = event.keyCode;

  if (isFirstMove) {
    isFirstMove = false;
    index = 0;
    cards[index].classList.add("shadow");
    return;
  }

  switch (x) {
    case 37: //left arrow key
      moveLeft();
      break;
    case 38: //Up arrow key
      moveUp();
      break;
    case 39: //right arrow key
      moveRight();
      break;
    case 40: //down arrow key
      moveDown();
      break;
    case 13: //enter
      pressEnter();
  }
}
function pressEnter() {
  if (lockBoard) {
    return;
  }
  cards[index].classList.add("flipped");
  if (!flipped) {
    flipped = true;
    firstCard = cards[index];
    return;
  } else {
    flipped = false;
    secondCard = cards[index];
    console.log(secondCard);
    checkMatch();
  }
}

function moveUp() {
  console.log(index);
  if (index > 5 && index <= 17) {
    index -= 6;
    cards[index].classList.add("shadow");
    cards[index + 6].classList.remove("shadow");
  }
}
function moveDown() {
  console.log(index);
  if (index >= 0 && index <= 11) {
    index += 6;
    cards[index].classList.add("shadow");
    cards[index - 6].classList.remove("shadow");
  }
}
function moveLeft() {
  if (index > 0 && index <= 17) {
    index--;
    cards[index].classList.add("shadow");
    cards[index + 1].classList.remove("shadow");
  } else if (index <= 0) {
    index = 17;
    cards[index].classList.add("shadow");
    cards[0].classList.remove("shadow");
  }
}

function moveRight() {
  if (index >= 0 && index < 17) {
    index++;
    cards[index].classList.add("shadow");
    cards[index - 1].classList.remove("shadow");
  } else if (index >= 17) {
    cards[17].classList.remove("shadow");
    index = 0;
    cards[index].classList.add("shadow");
  }
  //console.log("right");
}

//upload
// 获取 input 元素
var input = document.querySelector("input");
// 获取 preview 元素
var preview = document.querySelectorAll(".front");
// 将 input 变成透明的
input.style.opacity = 0;
//console.log(preview[0].children);
input.addEventListener("change", updateImageDisplay);
function updateImageDisplay() {
  var curFiles = input.files;
  preview.forEach(x => {
    console.log(x.firstElementChild);
    const newImg = x.firstElementChild;
    newImg.src = window.URL.createObjectURL(curFiles[0]);
  });

  console.log(curFiles[0].URL);
}
