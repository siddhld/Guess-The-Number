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

//   if (guess === 12) {
//     document.querySelector('.message').textContent = '😊Correct Number🎉';
//     document.querySelector('.quest').textContent = guess;
//   }
// });

let random = Math.trunc(Math.random() * 15) + 1;
let userScore = 15;
let highScore = 0;

// Audio Section
let icon = document.querySelector('#icon');
let audio = new Audio();
audio.src = 'music/background music.mp3';
audio.loop = true;
audio.load();
let playing = false;
function music() {
  if (playing == false) {
    audio.play();
    playing = true;
    icon.innerHTML = '<i class="fa fa-volume-up" aria-hidden="true"></i>';
  } else {
    audio.pause();
    playing = false;
    icon.innerHTML = '<i class="fa fa-volume-off" aria-hidden="true"></i>';
  }
}

// Click Sound
let clickSound = new Audio();
clickSound.src = 'music/clickSound.mpeg';
function sound() {
  clickSound.play();
}

// win Sound
let win = new Audio();
win.src = 'music/win.mpeg';

// lose Sound
let gameover = new Audio();
gameover.src = 'music/lose.mp3';

// function Implementation
let checkFunc = function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '☹️ No Number';
  } else if (guess === random) {
    document.querySelector('.quest').textContent = guess;
    document.querySelector('.message').textContent = '😊 Correct Number🎉';
    document.querySelector('body').style.backgroundColor = '#60b647';
    if ((playing = true)) {
      audio.pause();
      playing = false;
      icon.innerHTML = '<i class="fa fa-volume-off" aria-hidden="true"></i>';
    }
    win.play();
    if (userScore > highScore) {
      highScore = userScore;
      document.querySelector('.highscore').textContent = userScore;
    }
  } else if (guess !== random) {
    if (userScore < 2) {
      document.querySelector('body').style.backgroundColor = '#fa5252';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = 'You Lose! 😵‍💫🤕';
      if ((playing = true)) {
        audio.pause();
        playing = false;
        icon.innerHTML = '<i class="fa fa-volume-off" aria-hidden="true"></i>';
      }
      gameover.play();
    } else {
      document.querySelector('.message').textContent =
        guess > random ? '🥲 Too High 📈' : '🥲 Too Low 📉';
      document.querySelector('.score').textContent = --userScore;
    }
  }
};

let againFunc = function () {
  random = Math.trunc(Math.random() * 15) + 1;
  userScore = 15;
  document.querySelector('.quest').textContent = '?';
  document.querySelector('.message').textContent = '🤔 Start guessing...';
  document.querySelector('.score').textContent = userScore;
  document.querySelector('body').style.backgroundColor = '#7fffd48a';
  document.querySelector('.guess').value = '';
};

// Calling Function
document.querySelector('.check').addEventListener('click', function () {
  checkFunc();
});

document.querySelector('.again').addEventListener('click', function () {
  againFunc();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    checkFunc();
  }
  if (e.key === 'Escape') {
    againFunc();
  }
});
