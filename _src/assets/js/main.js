'use strict';

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const playButton = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullScreen = player.querySelector('.fullscreen');

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

function handleUpdate() {
  //name of the html coincide con las propiedades del video, 'volume' y 'playbackRate'.
  //this.value coge el valor del input
  video[this.name] = this.value;
}

function handleProgress() {
  const percentage = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percentage}%`;
}

function scrub (e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function goFullScreen() {
  video.requestFullscreen();
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

playButton.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleUpdate));

progress.addEventListener('click', scrub);

fullScreen.addEventListener('click', goFullScreen);