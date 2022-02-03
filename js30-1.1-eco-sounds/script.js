
// const audio = document.querySelector('audio');
const playBtn = document.querySelector('.play-btn');
const pauseBtn = document.querySelector('.pause-btn');
const audio = new Audio();
// let isPlay = false;


playBtn.addEventListener('click', playAudio);
pauseBtn.addEventListener('click', pauseAudio);


function playAudio() {
  audio.src = './assets/audio/drozd.mp3';
  audio.currentTime = 0;
  audio.play();
}

function pauseAudio() {
  audio.pause();
}






const button = document.querySelector('button');

function toggleBtn() {
  button.classList.toggle('pause');
}
button.addEventListener('click', toggleBtn);





// window.addEventListener('click', function(event) {
//   if (!isPlay) {
//     audio.src = './assets/audio/drozd.mp3';
//     audio.currentTime = 0;
//     audio.play();
//     } else {
//       audio.pause();
//     }
// }













// const audio = document.querySelector('audio');
// const playBtn = document.querySelector('video-button);
// const pauseBtn = document.querySelector('video-button.active');
// const myAudio = new Audio('./assets/audio/drozd.mp3');
// let isPlay = false;


// function playAudio() {
//   audio.src = './assets/audio/drozd.mp3';
//   audio.currentTime = 0;
//   audio.play();
// }
// function pauseAudio() {
//   audio.pause();
// }
// playBtn.addEventListener('click', playAudio);
// pauseBtn.addEventListener('click', pauseAudio);



// function result (event) 

//   if (event.target.classList.contains("video-button")) {
// if(!isPlay) 




// const audio = document.querySelector('audio');
// const playBtn = document.querySelector('.play-btn');
// const pauseBtn = document.querySelector('.pause-btn');

// function playAudio() {
//   audio.currentTime = 0;
//   audio.play();
// }

// function pauseAudio() {
//   audio.pause();
// }

// playBtn.addEventListener('click', playAudio);
// pauseBtn.addEventListener('click', pauseAudio);








// const audio = document.querySelector('audio');
// const playBtn = document.querySelector('.video-button');
// const pauseBtn = document.querySelector('.video-button.active');


// playBtn.addEventListener('click', playVideo);
// pauseBtn.addEventListener('click', pauseVideo);

// function playVideo() {
//   audio.currentTime = 0;
//   video.play();
// }

// function pauseVideo() {
//   video.pause();
// }










// const videoButton = document.querySelector(".video-button");
// videoButton.addEventListener('click', changeButton);

// function changeButton() {
//   videoArray.forEach((selector) => {
//     const elements = document.querySelectorAll(selector);
//     elements.forEach((element) => {
//       element.classList.toggle('pause')
//     })
//   })
// }