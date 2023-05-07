'use strict';

//First we create variables for elements to be adjusted
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
//this is another way to select IDs
const score1El = document.getElementById('score--1');
const currentScore0El = document.getElementById('current--1');
const currentScore1El = document.getElementById('current--0');
//FOR THE BUTTONS
const newGame = document.querySelector('.btn--new');
const rollDice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');

let currScore = 0;
let currScore0 = document.getElementById('current--0');
let currScore1 = document.getElementById('current--1');
let scores = [0, 0]; //the final scores(total scores)
let activePlayer = 0; //We need to know the active player
let playing = true;

//assigning values to the initial scores
score0El.textContent = 0;
score1El.textContent = 0;

//For the dice, we need to hide the dice and so for that, we would create a 'hidden' class in the css. Then add the hidden class to the dice element
const diceImg = document.querySelector('.dice');
diceImg.classList.add('hidden');

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currScore = 0;
  //Then switch to the next player
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

document.getElementById(`current--${activePlayer}`).textContent = 0;
currScore = 0;
//Then switch to the next player
activePlayer = activePlayer === 0 ? 1 : 0;

player0El.classList.toggle('player--active');
player1El.classList.toggle('player--active');

//IMPLEMENTING THE ROLL DICE FUNCTIONALITY
rollDice.addEventListener('click', function () {
  if (playing) {
    //We need to generate a random dice roll
    const diceNum = Math.trunc(Math.random() * 6) + 1;
    console.log(diceNum);

    //Then we display the dice
    diceImg.classList.remove('hidden');
    diceImg.src = `img/dice-${diceNum}.png`;

    //And check for a 1
    if (diceNum !== 1) {
      currScore += diceNum;
      console.log(currScore);
      // currScore0.textContent = currScore; //To display the total in the 'current score' for the player

      //However, this if/else statement should work for both players and also help us know when to switch

      document.getElementById(`current--${activePlayer}`).textContent =
        currScore; //I DO NOT UNDERSTAND THIS IN ANY WAY 😪

      //We add the value to the current score
    } else {
      //Set the current score and active score back to 0
      // document.getElementById(`current--${activePlayer}`).textContent = 0;
      // currScore = 0;
      // //Then switch to the next player
      // activePlayer = activePlayer === 0 ? 1 : 0;
      // player0El.classList.toggle('player--active');
      // player1El.classList.toggle('player--active');

      switchPlayer();
    }
  }
});

//For the button hold
hold.addEventListener('click', function () {
  if (playing) {
    //Add current score to active player's score
    scores[activePlayer] += currScore;
    //   scores[1] = scores[1] + currScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //Check if player's score is >=100
    if (scores[activePlayer] >= 20) {
      playing = false;
      //finish the game
      diceImg.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add(`player--winner`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove(`player--active`);
    } else {
      //switch to the next player
      switchPlayer();
    }
  }
});

//resetting the game
