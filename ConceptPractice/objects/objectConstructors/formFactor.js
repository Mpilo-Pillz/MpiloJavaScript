function Widget(partNo, size) {
     this.no = partNo;
     this.breed = size;
}

function FormFactor(material, widget){
    this.material = material;
    this.widget = widget;
    return this;
}

var widgetA = new Widget(100, "large");
var widgetB = new Widget(101, "small");
var formFactorA =new FormFactor("pastic", widgetA);
var formFactorB = new FormFactor("metal", widgetB);

console.log(widgetA);
console.log(widgetB);
console.log(formFactorA);
console.log(formFactorB);