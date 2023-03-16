'use strict';

const checkButton = document.querySelector('.check');
const guessField = document.querySelector('.guess');

checkButton.addEventListener('click', function () {
    const guessedNumber = Number(guessField.value);
    
});

let secretNumber = document.querySelector('.number');
secretNumber.textContent = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber.textContent);
