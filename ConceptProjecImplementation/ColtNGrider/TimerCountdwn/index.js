class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    this.startButton.addEventListener("click", this.start);
  }

  startError() {
    this.importantMethodToCall();
    console.log("Starts timer");
  }

  start = () => {
    this.importantMethodToCall();
    console.log("Starts timer");
  }

  importantMethodToCall() {
    console.log("IMPORTANT METHOD CALLED");
  }
}

const durationInput = document.querySelector("#duration");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");

const timer = new Timer(durationInput, startButton, pauseButton);





