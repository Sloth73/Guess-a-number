'use strict';

const checkButton = document.querySelector('.check');
const guessField = document.querySelector('.guess');
let message = document.querySelector('.message');
let score = document.querySelector('.score').textContent;

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;

checkButton.addEventListener('click', function () {
    const guessedNumber = Number(guessField.value);
    if (!guessedNumber) {
        message.textContent = 'No number! 🛑'
    }
    else if (guessedNumber > secretNumber) {
        message.textContent = 'Too high! 📈'
        score = Number(score) - 1;
        document.querySelector('.score').textContent = score;
        console.log(typeof score, score);
    }
    else if (guessedNumber < secretNumber) {
        message.textContent = "Too low! 📉";
        score = Number(score) - 1;
        document.querySelector(".score").textContent = score;
    }
    if (guessedNumber === secretNumber) {
      message.textContent = "You win! 🥳";
    }
});

