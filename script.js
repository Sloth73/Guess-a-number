'use strict';

//DOM from HTML (Constances)
const checkButton = document.querySelector('.check');
const guessField = document.querySelector('.guess').value;
const againButton = document.querySelector('.again');

//DOM from HTML (Variables)
let guessingNumber = document.querySelector(".number").textContent;
let message = document.querySelector(".message").textContent;
let scoreShown = document.querySelector('.score').textContent;
let body = document.querySelector('body');
let highScoreShown = document.querySelector(".highscore").textContent;

// Declared variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// Check button functionality
checkButton.addEventListener('click', function () {
    let guessedNumber = Number(guessField);
    if (!guessedNumber) {
        message = "No number! 🛑";  
    }

    else if (guessedNumber === secretNumber) {
        guessingNumber = secretNumber;
        body.style.backgroundColor = "green";
        message = "You win! 🥳";
        if (score > highScore) {
            highScore = score;
            highScoreShown = highScore;
        }
    }
    
    else if (guessedNumber !== secretNumber) {
        if (score > 1) {
          message =
            guessedNumber > secretNumber ? "Too high! 📈" : "Too low! 📉";
          score--;
          scoreShown = score;
        } else {
          message = "You lost! 👎";
          scoreShown = 0;
        }
    }
});

// Play again button functionality
againButton.addEventListener('click', function () {
    body.style.backgroundColor = 'black';
    guessField = '';
    message = 'Start guessing...';
    guessingNumber = '?';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    scoreShown = score;   
});
