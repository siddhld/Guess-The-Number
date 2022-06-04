'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number';

// document.querySelector('.quest').textContent = 15;

// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 25;
// let no = document.querySelector('.guess').value;
// console.log(no);

//////// Click and fetch data
// document.querySelector('.check').addEventListener('click', function () {
//   console.log(document.querySelector('.guess').value);
//   document.querySelector('.message').textContent = '🎉Correct Number😊';
// });

// document.querySelector('.check').addEventListener('click', function () {
//   let guess = Number(document.querySelector('.guess').value);

//   console.log(guess, typeof guess);

//   if (!guess) {
//     document.querySelector('.message').textContent = 'Enter Number First';
//   }

//   if (guess === 12) {
//     document.querySelector('.message').textContent = '😊Correct Number🎉';
//     document.querySelector('.quest').textContent = guess;
//   }
// });

let random = Math.trunc(Math.random() * 15) + 1;
let userScore = 15;
let highScore = 0;

document.querySelector('.quest').textContent = random;
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '☹️ No Number';
  } else if (guess === random) {
    document.querySelector('.quest').textContent = guess;
    document.querySelector('.message').textContent = '😊 Correct Number🎉';
    document.querySelector('body').style.backgroundColor = '#60b647';
    if (userScore > highScore) {
      highScore = userScore;
      document.querySelector('.highscore').textContent = userScore;
    }
  } else if (guess !== random) {
    if (userScore < 2) {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent =
        'You Lose! Game Over 😵‍💫🤕';
    } else {
      document.querySelector('.message').textContent =
        guess > random ? '🥲 Too High 📈' : '🥲 Too Low 📉';
      document.querySelector('.score').textContent = --userScore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  random = Math.trunc(Math.random() * 15) + 1;
  userScore = 15;
  document.querySelector('.quest').textContent = '?';
  document.querySelector('.message').textContent = '🤔 Start guessing...';
  document.querySelector('.score').textContent = userScore;
  document.querySelector('body').style.backgroundColor = '#7fffd48a';
  document.querySelector('.guess').value = '';
});
