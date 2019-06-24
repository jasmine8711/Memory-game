let cards = document.querySelectorAll(".card");
const cardUl = document.getElementById("cardul");
const cardimgs = document.querySelectorAll(".front");
const cardArray = Array.prototype.slice.call(cardimgs);
const startBtn = document.querySelector("#startbtn");

startBtn.addEventListener("click", showCard);
function showCard() {
  cardimgs.forEach(x => {
    //show img
    x.classList.remove("hidden");
    //after 5s , 删除ul里面全部的li
    setTimeout(() => {
      x.parentElement.removeChild(x);
    }, 2000);
  });
  //新的随机数组
  const newCard = shuffle(cardArray);
  //新的数组放到ul里面
  console.log(cards);
  console.log(newCard);

  for (let j = 0; j < newCard.length; j++) {
    cards[j].appendChild(newCard[j]);
  }
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
