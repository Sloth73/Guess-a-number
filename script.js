'use strict';

const checkButton = document.querySelector('.check');
const guessField = document.querySelector('.guess');
const againButton = document.querySelector('.again');
let message = document.querySelector('.message');
let scoreShown = document.querySelector('.score');
let body = document.querySelector('body');
let highScore = document.querySelector('highscore');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

checkButton.addEventListener('click', function () {
    const guessedNumber = Number(guessField.value);
    if (!guessedNumber) {
        message.textContent = "No number! 🛑";  
    }

    else if (guessedNumber === secretNumber) {
        document.querySelector(".number").textContent = secretNumber;
        body.style.backgroundColor = "green";
        message.textContent = "You win! 🥳";
    }
        
    else if (guessedNumber > secretNumber) {
      if (score > 1) {
        message.textContent = "Too high! 📈";
        score--;
        scoreShown.textContent = score;
      }
      else {
        message.textContent = "You lost! 👎";
        scoreShown.textContent = 0;
      }
    }
    else if (guessedNumber < secretNumber) {
      if (score > 1) {
        message.textContent = "Too low! 📉";
        score--;
        scoreShown.textContent = score;
      } else {
        message.textContent = "You lost! 👎";
        scoreShown.textContent = 0;
      }
    }
    
});

// againButton.addEventListener('click', function () {
//     body.style.backgroundColor = 'black';
//     guessField.value = '';
//     message.textContent = 'Start guessing...';
//     document.querySelector(".number").textContent = '?';
//     secretNumber = Math.trunc(Math.random() * 20) + 1;

//     if (Number(highScore.textContent) < Number(score.textContent)) {
//         highScore.textContent = score.textContent
//         score.textContent = 20;
//     }
//     else {
//         score.textContent = 20;
//     }

   
// });
