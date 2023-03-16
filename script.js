'use strict';

const checkButton = document.querySelector('.check');
const guessField = document.querySelector('.guess');
const againButton = document.querySelector('.again');
let message = document.querySelector('.message');
let scoreShown = document.querySelector('.score');
let body = document.querySelector('body');
let highScoreShown = document.querySelector('.highscore');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
//let highScore = 0;

checkButton.addEventListener('click', function () {
    const guessedNumber = Number(guessField.value);
    if (!guessedNumber) {
        message.textContent = "No number! 🛑";  
    }

    else if (guessedNumber === secretNumber) {
        document.querySelector(".number").textContent = secretNumber;
        body.style.backgroundColor = "green";
        message.textContent = "You win! 🥳";
        if (score > highScore) {
            highScore = score;
            highScoreShown.textContent = highScore;
        }
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

againButton.addEventListener('click', function () {
    body.style.backgroundColor = 'black';
    guessField.value = '';
    message.textContent = 'Start guessing...';
    document.querySelector(".number").textContent = '?';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    scoreShown.textContent = score;   
});
