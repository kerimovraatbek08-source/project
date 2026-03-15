const gmailInput = document.querySelector("#gmail_input");
const gmailButton = document.querySelector("#gmail_button");
const gmailResult = document.querySelector("#gmail_result");

const regExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

gmailButton.onclick = () => {
  if (regExp.test(gmailInput.value)) {
    gmailResult.innerText = "OK, GOOD!";
    gmailResult.style.color = "green";
  } else {
    gmailResult.innerText = "NO,ERROR X(";
    gmailResult.style.color = "red";
  }
};

const childBlock = document.querySelector(".child_block");

let positionX = 0;
let positionY = 0;

const moveChildBlock = () => {
  if (positionX < 448 && positionY === 0) {
    positionX++;
    childBlock.style.left = `${positionX}px`;
  } else if (positionX >= 448 && positionY < 448) {
    positionY++;
    childBlock.style.top = `${positionY}px`;
  } else if (positionY >= 448 && positionX > 0) {
    positionX--;
    childBlock.style.left = `${positionX}px`;
  } else if (positionX === 0 && positionY > 0) {
    positionY--;
    childBlock.style.top = `${positionY}px`;
  }
  setTimeout(moveChildBlock, 5);
};
moveChildBlock();

const seconds = document.querySelector("#seconds");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");

const gif = document.getElementById("timeGif");
const png = document.getElementById("timePng");

let interval;
let secs = 0;

startBtn.onclick = () => {
  if (!interval) {
    interval = setInterval(() => {
      secs++;
      seconds.innerText = secs;
    }, 1000);
  }
};

stopBtn.onclick = () => {
  clearInterval(interval);
  interval = null;
};

resetBtn.onclick = () => {
  clearInterval(interval);
  interval = null;
  secs = 0;
  seconds.innerText = 0;
};
