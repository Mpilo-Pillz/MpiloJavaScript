const durationInput = document.querySelector("#duration");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");

const timer = new Timer(durationInput, startButton, pauseButton);

console.log('window-->', this);

const printThis = () => {
    console.log('arrow func', this);
}

const colors = {
    printColors() {
        console.log('object -->', this);
        const printThis = () => {
            console.log('colors arrow func-->', this);
        }
        printThis();
    }
}

colors.printColors()


// ------- Bind, Call, apply
const printThisBCA = function () {
    console.log('callApply', this);
}

printThisBCA.call({ color: 'red' })
printThisBCA.apply({ color: 'green' })
printThisBCA.apply() // window

// ----- All other cases
const colors = {
    printColorAllThisIsOnTheLeft() {
        console.log(this);
    }
}

colors.printColorAllThisIsOnTheLeft() // this - is the colors object


const randomObject = {
    a: 1
};

randomObject.printColors = colors.printColors
