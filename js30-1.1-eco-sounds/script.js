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
