let cardbox = document.getElementsByClassName("card");

const cardimgs = document.querySelectorAll(".front");
const cardArray = Array.prototype.slice.call(cardbox);
const startBtn = document.querySelector("#startbtn");

startBtn.addEventListener("click", showCard);
function showCard() {
  cardimgs.forEach(x => {
    //show img
    x.classList.remove("hidden");
    //after 5s ,hidden img again
    setTimeout(() => {
      x.classList.add("hidden");
    }, 2000);
  });

  //create random numbercard
  shuffle(cardArray);
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

console.log(cardArray);
