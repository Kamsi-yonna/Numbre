'use strict';

const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const showModal = document.querySelectorAll('.show-modal');
let modalH1 = document.querySelector('.modal h1');

//ADDING AN INPUT FIELD WHERE PLAYERS CAN TYPE IN THEIR NAMES BEFORE THE GAME BEGINS
let Player1 = document.getElementById('name--0');
let Player2 = document.getElementById('name--1');
let submit1 = document.querySelector('.nameBtn1');
let submit2 = document.querySelector('.nameBtn2');
let startBtn = document.querySelector('.startBtn');

//Letting the name to be originally hidden
Player1.classList.add('hidden');
Player2.classList.add('hidden');
modal.classList.add('hidden');

//Dry Cleaning the code

let numbre = document.getElementById('numbre');
let start = document.querySelector('.btn--numbre');
let target = document.getElementById('winner');

//First we create variables for elements to be adjusted
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');

//FOR THE BUTTONS
const newGame = document.querySelector('.btn--new');
const rollDice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const diceImg = document.querySelector('.dice');

let scores, currScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;

  diceImg.classList.add('hidden');

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  //Letting the name to be originally hidden
  Player1.classList.add('hidden');
  Player2.classList.add('hidden');

  player1Name.classList.remove('hidden'); //inputF
  player1Name.value = '';
  player2Name.classList.remove('hidden');
  player2Name.value = '';

  rollDice.classList.add('hidden');
  hold.classList.add('hidden');
  start.classList.remove('hidden');
  numbre.classList.remove('hidden');
  numbre.value = '';

  submit1.classList.remove('hidden'); //btns
  submit2.classList.remove('hidden');

  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
init();

function NumberSubmit(startBtn, numbreInput, modalH1) {
  start.addEventListener('click', function () {
    let start = Number(numbreInput.value);
    console.log(start);
    if (start < 20 || start > 150) {
      console.log('nope');
      modalH1.textContent = 'Set a Numbre Between 20 and 150 😼';
      modal.classList.remove('hidden');
      overlay.classList.remove('hidden');
    } else {
      target.textContent = start;
      startBtn.classList.add('hidden');
      numbreInput.classList.add('hidden');
      hold.classList.remove('hidden');
      rollDice.classList.remove('hidden');
    }
  });
}
NumberSubmit(start, numbre, modalH1);

function PlayerSubmit(submitBtn, playerNameInput, player) {
  submitBtn.addEventListener('click', function () {
    let playerName = playerNameInput.value;
    console.log(playerName);
    if (playerName) {
      player.classList.remove('hidden');
      player.textContent = playerName;

      //hide submit btn and text field
      playerNameInput.classList.add('hidden');
      submitBtn.classList.add('hidden');
    } else {
      //   playerNameInput.value = 'kindly input a name';
      modalH1.textContent = 'Everyone should have a name😅';
      //display the modal statement
      modal.classList.remove('hidden');
      overlay.classList.remove('hidden');
    }
  });
}
PlayerSubmit(submit1, player1Name, Player1);
PlayerSubmit(submit2, player2Name, Player2);

//FOR CLOSING THE POPUP
const closeModalFunc = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
overlay.addEventListener('click', closeModalFunc);
closeModal.addEventListener('click', closeModalFunc);
document.addEventListener('keydown', function (event) {
  let Escape = event.key;
  // console.log(event.key);
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModalFunc();
  }
});

//If there is no name, then dont start the game
if (player1Name.value === '' || player2Name.value === '') {
  playing = false;
} else if (!player1Name.value === '' || !player2Name.value === '') {
  playing = true;
}

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currScore = 0;
  //Then switch to the next player
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//IMPLEMENTING THE ROLL DICE FUNCTIONALITY
rollDice.addEventListener('click', function () {
  if (player1Name.value === '' || player2Name.value === '') {
    playing = false;
  } else {
    playing = true;
  }

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

      document.getElementById(`current--${activePlayer}`).textContent =
        currScore; //I DO NOT UNDERSTAND THIS IN ANY WAY 😪

      //We add the value to the current score
    } else {
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
    if (scores[activePlayer] >= numbre.value) {
      playing = false;
      //finish the game
      diceImg.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add(`player--winner`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove(`player--active`);

      //Creating a pop up for the winner
      let p1 = player1Name.value;
      let p2 = player2Name.value;

      if (activePlayer == 0) {
        // playing = false;
        modalH1.textContent = `${p1} wins the game`;
        modal.classList.remove('hidden');
        rollDice.disabled = true; // Disables the button
        hold.disabled = true; // Disables the button
      } else {
        // playing = false;
        modalH1.textContent = `${p2} wins the game`;
        modal.classList.remove('hidden');
        rollDice.disabled = true; // Disables the button
        hold.disabled = true; // Disables the button
      }
      console.log(player1Name.value);
    } else {
      //switch to the next player
      switchPlayer();
    }
  }
});
//resetting the game
newGame.addEventListener('click', init);

//I DID NOT UNDERSTAND MOST OF THIS
//THIS WAS TOUGH BUT I WAS ABLE TO USE ALL HE TOUCHED TO ADD SOME MORE LOGIC $ FUNCTIONALITY TO THE GAME
