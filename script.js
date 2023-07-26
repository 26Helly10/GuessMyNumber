'use strict';


let SecretNumber = Math.trunc(Math.random() * 20) + 1; //creating the secret number
let Score = 20;
let Highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

console.log(SecretNumber);

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) { // if is no number entered 
        //document.querySelector('.message').textContent = 'No number!';
        displayMessage('No number!');
    } else if (guess === SecretNumber) { // if it's equal to the secret number
        displayMessage('Correct number!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = guess;
        if (Score > Highscore) {
            Highscore = Score;
            document.querySelector('.highscore').textContent = Highscore;

        }

    } else if (guess !== SecretNumber) { // if it's different to the secret number
        if (Score > 1) {
            displayMessage(guess > SecretNumber ? 'Too high!' : 'Too low!');
            Score--;
            document.querySelector('.score').textContent = Score;
        } else {
            displayMessage('You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }
    console.log(guess);
})

document.querySelector('.again').addEventListener('click', function() {
    Score = 20;
    document.querySelector('.score').textContent = Score;
    SecretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor = ' #222';
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
})