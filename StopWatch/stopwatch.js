// Timer Field
let hourElement = document.querySelector(".hour");
let minuteElement = document.querySelector(".minute");
let secondElement = document.querySelector(".second");
let millisecondElement = document.querySelector(".milliSecond");

// Button Field
let startButton = document.querySelector(".start");
let pauseButton = document.querySelector(".pause");
let stopButton = document.querySelector(".stop");

// Counter Variable
let hour = 00;
let minute = 00;
let second = 00;
let millisecond = 00;
let interval;

window.onload = () => clearFields();

startButton.onclick = function () {
  clearInterval(interval); // If Some Error Happen and Interval is Setup, It Will Clear That Interval
  interval = setInterval(startTimer, 10); //
};
pauseButton.onclick = function () {
  clearInterval(interval); // On Clicking Pause Buttom We Will Clear Interval
};
stopButton.onclick = function () {
  clearInterval(interval); // Clear Interval
  clearFields(); // Clear Timer Fields
};
function startTimer() {
  millisecond++;
  if (millisecond < 9) {
    millisecondElement.innerText = "0" + millisecond;
  }
  if (millisecond > 99) {
    second++;
    secondElement.innerText = "0" + second;
    millisecond = 0;
    millisecondElement.innerText = "0" + millisecond;
  }
  if (second > 60) {
    minute++;
    minuteElement.innerText = "0" + minute;
    second = 0;
    secondElement.innerText = "0" + second;
  }

  if (millisecond > 9) {
    millisecondElement.innerText = millisecond;
  }
  if (second > 9) {
    secondElement.innerText = second;
  }
  if (minute > 9) {
    minuteElement.innerText = minute;
  }
  if (hour > 9) {
    hourElement.innerText = hour;
  }
}

function clearFields() {
  hourElement.innerText = "00";
  minuteElement.innerText = "00";
  secondElement.innerText = "00";
  millisecondElement.innerText = "00";
}
