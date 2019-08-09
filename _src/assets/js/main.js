'use strict';

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const playButton = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const range = player.querySelectorAll('.player__slider');

function togglePlay() {
  if(video.paused){
    video.play();
  } else {
    video.pause();
  }
  //const method = video.paused ? 'play' : 'pause';
  //video[method]();
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  playButton.textContent = icon;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
playButton.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
