'use strict';


    let secretNumber = Math.trunc(Math.random() * 20) +1;
    let score = 10;
    let highScore = 0;

    const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

    document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    
    
    // if the user has not entered a value it will be 0 and 0 is an incorrect value. For the if block to work, we need to convert this value to true with the not operator.

    if(!guess){ 
        displayMessage('⛔ No Number ⛔')
    } 


    // When player wins

    else if (guess === secretNumber) {
        displayMessage('🏆 Correct Number 🏆')
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = secretNumber;

        //Highscore

        if(score > highScore) {
           highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }


    // When guess is wrong

    else if (guess !== secretNumber) {
        if (score > 1) {
        displayMessage(guess > secretNumber ? '⬆️ Too High ⬆️ ' : '⬇️ Too Low ⬇️ ')
        score--;
        document.querySelector('.score').textContent = score;
        } else {
            displayMessage('🤣 You lost the game!')
            document.querySelector('body').style.backgroundColor = '#b51d1d';
            document.querySelector('.score').textContent = 0;
        }
    }
  

    
})


    // Restart game

    document.querySelector('.again').addEventListener('click', function(){
        score = 10;
        secretNumber = Math.trunc(Math.random() * 20) +1;
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').style.width = '15rem'
        document.querySelector('body').style.backgroundColor = '#222';
        displayMessage('Start guessing...');
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
    })