class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height
    }

    setWidth(width) {
        this.width = width;
    }

    setHeight(height) {
        this.height = height;
    }

    area() {
        return this.height * this.width;
    }
}

class Square extends Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height
    }

    setWidth(width) {
        this.width = width;
        this.height = width;
    }

    setHeight(height) {
        this.height = height;
        this.width = height;
    }

    area() {
        return this.height * this.width;
    }
}

function increaseRectangleWidth(rectangle) {
    rectangle.setWidth(rectangle.width + 1);
}

const rectangle1 = new Rectangle(10, 2);
const rectangle2 = new Rectangle(5, 5)

increaseRectangleWidth(rectangle1)
console.log(rectangle1.area());
console.log(rectangle2.area());
