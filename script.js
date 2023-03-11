'use strict';

const checkButton = document.querySelector('.check')
const guessField = document.querySelector('.guess');

checkButton.addEventListener('click', function () {
    const guessedNumber = Number(guessField.value);
    console.log(guessedNumber);
});