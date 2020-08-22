function Coffee(roast, ounces) {
    this.roast = roast;
    this.ounces = ounces;

    this.getSize = function() {
        if (this.ounces === 8) {
            return 'small';
        } else if (this.ounces === 12) {
            return 'medium'
        } else {
            return "large";
        }
    }

    this.printMessage = function() {
        return `you have ordered ${this.getSize()} ${this.roast} coffee`
    }
}

var lightMilky = new Coffee("Light Milky", 8)
var houseBlend = new Coffee("House Blend", 12);
var darkRoast = new Coffee("Dark Roast", 16);
console.log(houseBlend.printMessage());
console.log(darkRoast.printMessage());
console.log(lightMilky.printMessage());