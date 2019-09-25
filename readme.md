Food Memory Game. [Demo](https://jasmine8711.github.io/Memory-game/).

I recreated the famous memory game. In the game you have a bunch of cards. Each card contains an image, there are exactly two cards of each image. The cards are placed in a random order. You get to turn them around. If you turned around two cards they either turn back so you can't see their image if they did not match or, if they did match, they stay visible.

## How do i do that .

Now i know to slove a complicated problem, i should break them to baby step.

1. Create HTML and basic css.
1. Make flip animation in css.
1. Get the element from html in javascript.
1. Randomize the display of cards.
1. Get the first target which is the user clicked.
1. Get the second target user clicked.
1. Make sure user doesn't click on the same card twice .
1. Only allow two cards to be clicked.
1. Compare two clicked element.
1. If the two cards are the same, make the point add 1.
1. Show back of card initially and flip on click.
1. Make the cheating button.

## What did i learn form making this game.

### three different ways to randomize the order.

1. fisher and yates shuffle.
   ```//Fisher–Yates shuffle
   function shuffle(array) {
   var i = 0,
   j = 0,
   temp = null;
   for (i = array.length - 1; i > 0; i -= 1) {
   j = Math.floor(Math.random() \* (i + 1));
   temp = array[i];
   array[i] = array[j];
   array[j] = temp;
   }
   return array;
   }
   ```

```//put new order in html
function newFoodsOrder() {
const newFoods = shuffle(cardsBox);
for (let i = 0; i < 10; i++) {
container.appendChild(newFoods[i]);
}
}
```

2. using flex box order .

```
function shuffle(){
    cards.forEach(x =>{
        let randomPos = Math.floor(Math.random()*12);
        card.style.order = randomPos;
    })
}
```

3. `gameGrid.sort(() => 0.5 - Math.random()`

### IIFE

Immediately Invoked Function Expression.

```(function() {
 var x = 20;
 var y = 20;
 var answer = x + y;
 console.log(answer);
 })();
```

it seems a lot to learn about IIFE , now i know that An Immediately Invoked Function Expression is a good way at protecting the scope of your function and the variables within it.
