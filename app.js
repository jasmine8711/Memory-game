const cards = document.querySelectorAll(".card");
const cardsBox = Array.prototype.slice.call(cards);

const cardBacks = document.querySelectorAll(".front");
const cardImgs = document.querySelectorAll(".back");
const startBtn = document.querySelector("#startbtn");
const point = document.getElementById("point");
const text = document.getElementById("text");
let score = 0;
point.innerText = score;

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
const foods = document.querySelectorAll(".food");
const foodsArray = Array.prototype.slice.call(foods);
const newFoods = shuffle(foodsArray);
//console.log(newFoods);
//put new order in html
function newFoodsOrder() {
  for (let i = 0; i < 10; i++) {
    //console.log(newCard[i]);
    cardImgs[i].innerHTML = newFoods[i].outerHTML;
  }
}

let flipped = false;
let firstCard;
let secondCard;

cards.forEach(x => {
  x.onclick = () => {
    x.classList.toggle("flipped");
    if (!flipped) {
      flipped = true;
      firstCard = x;
      firstIndex = cardsBox.indexOf(x);
      //console.log(firstIndex, flipped);
    } else {
      flipped = false;
      secondCard = x;
      secondIndex = cardsBox.indexOf(x);

      if (foods[firstIndex].dataset.name === foods[secondIndex].dataset.name) {
        console.log("win");
        score = 1;
        text.innerText = "you win!";
        setTimeout(() => {
          cards.forEach(x => {
            x.classList.remove("flipped");
          });
        }, 2000);
      } else {
        console.log("lost");
        text.innerText = "you lost!";
        score--;

        setTimeout(() => {
          cards.forEach(x => {
            x.classList.remove("flipped");
          });
        }, 2000);
      }
    }
  };
});
