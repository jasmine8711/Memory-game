const cards = document.querySelectorAll(".card");
const cardsBox = Array.prototype.slice.call(cards);
const cardUl = document.getElementById("cardul");

const startBtn = document.querySelector("#startbtn");
const point = document.getElementById("point");
const text = document.getElementById("text");
let score = 0;
point.innerText = score;
cards.forEach(x => {
  x.onclick = () => {
    x.classList.toggle("flipped");
  };
});

/* //Fisher–Yates shuffle
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
function newOrder() {
  const newCard = shuffle(cardArray);
  for (let i = 0; i < 10; i++) {
    console.log(newCard[i]);
    cards[i].innerHTML = newCard[i].outerHTML;
  }
}

const cardimgs = document.querySelectorAll(".front");
const cardArray = Array.prototype.slice.call(cardimgs);
const newCard = shuffle(cardArray);

//console.log(cardimgs[0].dataset.name);
function showCard() {
  newOrder();
  newCard.forEach(x => {
    //show img
    x.classList.remove("hidden");
    //after 5s , 删除ul里面全部的li
    setTimeout(() => {
      x.classList.add("hidden");
    }, 1000);
  });
}
startBtn.addEventListener("click", showCard);

let flipped = false;
let firstCard;
let secondCard;
cardsBox.forEach(x => {
  x.onclick = () => {
    x.classList.add("flipped");
    if (!flipped) {
      flipped = true;
      firstCard = x;
      //console.log(firstCard.children[0].dataset.name, flipped);
    } else {
      flipped = false;
      secondCard = x;
      if (
        firstCard.children[0].dataset.name ===
        secondCard.children[0].dataset.name
      ) {
        console.log("win");
        score++;
        text.innerText = "you win!";
        //newOrder();
      } else {
        text.innerText = "you lost!";
        score--;
        // newOrder();
      }
    }
  };
});
 */
