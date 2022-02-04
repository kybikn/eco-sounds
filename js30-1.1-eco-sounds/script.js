const button = document.querySelector("button");
const audio = document.querySelector("audio");
const playBtn = document.querySelector(".play");
const videoContainer = document.querySelector(".video-container");

let isPlay = false;

function playAudio() {
  audio.currentTime = 0;
  audio.play();
}

function pauseAudio() {
  audio.pause();
}

function toggleBtn() {
  if (!isPlay) {
    playBtn.classList.add("pause");
    audio.play();
    isPlay = true;
  } else {
    playBtn.classList.remove("pause");
    audio.pause();
    isPlay = false;
  }
}

playBtn.addEventListener("click", toggleBtn);

const linkItems = document.querySelectorAll(".nav-link");
const linkItemsBox = document.querySelector(".nav");
const linkImages = document.querySelectorAll(".portfolio-image");

linkItemsBox.addEventListener("click", changeAudio);

function changeAudio(event) {
  if (event.target.classList.contains("nav-link")) {
    let bird = event.target.dataset.bird;

    videoContainer.style.backgroundImage = `url('./assets/img/${bird}.jpg')`;

    linkItems.forEach((element) => element.classList.remove("active"));

    event.target.classList.add("active");

    audio.src = `./assets/audio/${bird}.mp3`;
    playBtn.classList.add("pause");
    audio.play();
    isPlay = true;
  }
}

// playBtn.addEventListener(
//   "click",
//   () => {
//     if (audio.paused) {
//       playBtn.classList.remove("play");
//       playBtn.classList.add("pause");
//       audio.play();
//     } else {
//       playBtn.classList.remove("pause");
//       playBtn.classList.add("play");
//       audio.pause();
//     }
//   },
//   false
// );

// let playlist = [
//   'solovey.mp3',
//   'drozd.mp3',
//   'zarynka.mp3',
//   'javoronok.mp3',
//   'slavka.mp3',
// ];

// const playNum = 0;

// function playNext('çlick', function(event) {
//   for (let i = 0; i <= playlist.length; i++) {

//   }
// playAudio();

// function playPrev();

// function playRound() {
//   if (playNum < 0) {
//     return playlist.length - 1 playNum[i]
// } else {
//   return playlist[0]  playNum[0]
// };

// playBtn.addEventListener('click', function(event) {
//   if (!isPlay) {
//     audio.src = './assets/audio/drozd.mp3';
//     audio.currentTime = 0;
//     audio.play();
//     } else {
//       audio.pause();
//     }
// }

// function result (event)
//   if (event.target.classList.contains(".play")) {
// if(!isPlay)

// function playVideo() {
//   audio.currentTime = 0;
//   video.play();
// }

// function pauseVideo() {
//   video.pause();
// }

// const videoButton = document.querySelector('.play');
// videoButton.addEventListener('click', changeButton);

// function changeButton() {
//   videoArray.forEach((selector) => {
//     const elements = document.querySelectorAll(selector);
//     elements.forEach((element) => {
//       element.classList.toggle('.pause')
//     })
//   })
// }
