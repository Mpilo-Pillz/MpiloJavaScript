const tipper = (tipPercent) => {
    return (bill) => {
        tipValue = bill * tipPercent;
        return `Tip is R${tipValue}. Meal is R${bill}. Total is R${tipValue + bill}`;
    }
}

const restaurant = tipper(.15);
console.log(restaurant(100));
console.log(restaurant(60));

const vigourAndVerve = tipper(.20);
console.log(vigourAndVerve(400));

const oceanBasket = tipper(.12);
console.log(oceanBasket(350));

const tip10 = tipper(.1);
const tip20 = tipper(.2);

console.log('Andy',tip10(100));
console.log('Drew',tip20(100));

///////////////////////////////////////
const myFunction = () => {
    const message = "This is my message";
    const printMessage = () => {
        console.log(message);
    }
    printMessage();
}

myFunction();

const myReturnFunction = () => {
    const message = "This is my return message";
    const printReturnMessage = () => {
        console.log(message);
    }
    return printReturnMessage;
}

const myPrintMessage = myReturnFunction();
myPrintMessage()

///////////////////////////////////////"IS THIS ENCASULATION IN JS?"

const createCounter = () => {
    let count = 0;

    return {
        increment() {
            count++;
        },
        decrement() {
            count--;
        },
        get() {
            return count;
        }
    }
}

const counter = createCounter();
counter.get();
counter.increment();
counter.get();
// counter.count = 3; wont work becuase count is private and not public
counter.increment();
counter.decrement();
console.log(counter.get());
