'use strict';

let Player1 = document.getElementById('name--0');
let Player2 = document.getElementById('name--1');

Player1.classList.add('hidden');
Player2.classList.add('hidden');

let submit1 = document.querySelector('.nameBtn1');
let submit2 = document.querySelector('.nameBtn2');

submit1.addEventListener('click', function () {
  let name1 = document.getElementById('player1Name').value;
  console.log(name1);

  Player1.classList.remove('hidden');
  Player1.textContent = name1;
});

submit2.addEventListener('click', function () {
  let name2 = document.getElementById('player2Name').value;
  console.log(name2);
  Player2.classList.remove('hidden');
  Player2.textContent = name2;

  input.classList.add('hidden');
  submit2.classList.add('hidden');
});

// document.querySelector('.nameBtn1').addEventListener('click', function () {
//   let guess = document.getElementById('player1Name').value;
//   console.log(typeof guess, guess);
// });

// //First we create variables for elements to be adjusted
// const player0El = document.querySelector('.player--0');
// const player1El = document.querySelector('.player--1');
// const score0El = document.querySelector('#score--0');
// const score1El = document.getElementById('score--1');
// const currentScore0El = document.getElementById('current--0');
// const currentScore1El = document.getElementById('current--1');

// //FOR THE BUTTONS
// const newGame = document.querySelector('.btn--new');
// const rollDice = document.querySelector('.btn--roll');
// const hold = document.querySelector('.btn--hold');
// const diceImg = document.querySelector('.dice');

// let scores, currScore, activePlayer, playing;
// const init = function () {
//   scores = [0, 0];
//   currScore = 0;
//   activePlayer = 0;
//   playing = true;

//   score0El.textContent = 0;
//   score1El.textContent = 0;
//   currentScore0El.textContent = 0;
//   currentScore1El.textContent = 0;

//   diceImg.classList.add('hidden');
//   player0El.classList.remove('player--winner');
//   player1El.classList.remove('player--winner');
//   player0El.classList.add('player--active');
//   player1El.classList.remove('player--active');
// };

// init();

// const switchPlayer = function () {
//   document.getElementById(`current--${activePlayer}`).textContent = 0;
//   currScore = 0;
//   //Then switch to the next player
//   activePlayer = activePlayer === 0 ? 1 : 0;
//   player0El.classList.toggle('player--active');
//   player1El.classList.toggle('player--active');
// };

// //IMPLEMENTING THE ROLL DICE FUNCTIONALITY
// rollDice.addEventListener('click', function () {
//   if (playing) {
//     //We need to generate a random dice roll
//     const diceNum = Math.trunc(Math.random() * 6) + 1;
//     console.log(diceNum);

//     //Then we display the dice
//     diceImg.classList.remove('hidden');
//     diceImg.src = `img/dice-${diceNum}.png`;

//     //And check for a 1
//     if (diceNum !== 1) {
//       currScore += diceNum;
//       console.log(currScore);

//       document.getElementById(`current--${activePlayer}`).textContent =
//         currScore; //I DO NOT UNDERSTAND THIS IN ANY WAY 😪

//       //We add the value to the current score
//     } else {
//       switchPlayer();
//     }
//   }
// });

// //For the button hold
// hold.addEventListener('click', function () {
//   if (playing) {
//     //Add current score to active player's score
//     scores[activePlayer] += currScore;
//     //   scores[1] = scores[1] + currScore;
//     document.getElementById(`score--${activePlayer}`).textContent =
//       scores[activePlayer];
//     //Check if player's score is >=100
//     if (scores[activePlayer] >= 20) {
//       playing = false;
//       //finish the game
//       diceImg.classList.add('hidden');
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.add(`player--winner`);
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.remove(`player--active`);
//     } else {
//       //switch to the next player
//       switchPlayer();
//     }
//   }
// });

// //resetting the game
// newGame.addEventListener('click', init);

// //I DID NOT UNDERSTAND MOST OF THIS
