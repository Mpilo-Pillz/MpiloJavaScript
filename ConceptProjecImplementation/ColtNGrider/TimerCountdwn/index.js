class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener('click', this.pause)
    // this.startButton.addEventListener("click", this.startError);
    // this.startButton.addEventListener("click", this.startBindThis.bind(this));
  }
  // interval;

  start = () => {
    this.tick();
    this.interval = setInterval(this.tick, 1000);
    console.log(this.interval); // 1

    // const timer = setInterval(this.tick, 1000);
    // this.importantMethodToCall();
  }

  pause = () => {
    clearInterval(this.interval);
  }

  tick = () => {
    console.log('tick');
  }

  startBindThis() {
    console.log("Starts and binds this comment out other event listneers");
    this.importantMethodToCall();
  }

  startError() {
    this.importantMethodToCall();
    console.log("does not Starts timer but invokes an error");
  }



  importantMethodToCall() {
    console.log("IMPORTANT METHOD CALLED");
  }
}

const durationInput = document.querySelector("#duration");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");

const timer = new Timer(durationInput, startButton, pauseButton);





