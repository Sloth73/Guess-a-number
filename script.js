'use strict';

const checkButton = document.querySelector('.check');
const guessField = document.querySelector('.guess');
let message = document.querySelector('.message');
let score = document.querySelector('.score');

const secretNumber = Math.trunc(Math.random() * 20) + 1;


checkButton.addEventListener('click', function () {
    const guessedNumber = Number(guessField.value);
    if (!guessedNumber) {
        message.textContent = 'No number! 🛑'
    }
    else if (guessedNumber > secretNumber) {
        if (score.textContent > 1) {
          message.textContent = "Too high! 📈";
          score.textContent = Number(score.textContent) - 1;
          document.querySelector(".score").textContent = score.textContent;
        } else {
            message.textContent = "You lost! 👎";
            score.textContent = 0;
        }
    }
    else if (guessedNumber < secretNumber) {
        if (score.textContent > 1) {
            message.textContent = "Too low! 📉";
            score.textContent = Number(score.textContent) - 1;
            document.querySelector(".score").textContent = score.textContent;
        }
        else {
            message.textContent = "You lost! 👎";
            score.textContent = 0;
        }
    }
    else if (guessedNumber === secretNumber) {
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = 'green'
        message.textContent = "You win! 🥳";
    }
});

