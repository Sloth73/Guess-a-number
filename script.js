'use strict';

const checkButton = document.querySelector('.check');
const guessField = document.querySelector('.guess');
let message = document.querySelector('.message');

const secretNumber = document.querySelector(".number");
secretNumber.textContent = Number(Math.trunc(Math.random() * 20 + 1));

checkButton.addEventListener('click', function () {
    const guessedNumber = Number(guessField.value);
    if (!guessedNumber) {
        message.textContent = 'No number! 🛑'
    }
    if (guessedNumber > secretNumber.textContent) {
        message.textContent = 'Too high! 📈'
    }
    if (guessedNumber < secretNumber.textContent) {
      message.textContent = "Too low! 📉";
    }
    if (guessedNumber == secretNumber.textContent) {
      message.textContent = "You win! 🥳";
    }
});

