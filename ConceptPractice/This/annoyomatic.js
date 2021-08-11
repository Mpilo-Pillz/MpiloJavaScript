const annoyer = {
    phrases: ["literally", "cray cray", " I can't even", "totes", "YOLO", "Can't Stop", "Won't Stop"],
    pickPhrase() {
        const { phrases } = this //annoyer
        const idx = Math.floor(Math.random() * phrases.length)
        return phrases[idx];
    },
    start() {
        this.timerId = setInterval(() => {
            console.log(this.pickPhrase())
        }, 3000);
    },
    commence() {
        const that = this;
        setInterval(function () {
            console.log(that.pickPhrase())
        }, 30);
    },
    begin() {
        setInterval(function () {
            console.log(this.pickPhrase())
        }, 3000);
    },
    stop() {
        clearInterval(this.timerId)
    }
}

// annoyer.start()
// annoyer.begin()
annoyer.commence()

