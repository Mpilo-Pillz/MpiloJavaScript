function hex(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function rgb(r, g, b) {
    return `rgb(${r},${g},${b})`
}
// hex(255, 100, 25);
// rgb(255, 100, 25)
// "#ff6419"
// "#rgb(225,100,25)"

function makeColor(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function () {
        console.log('dis-->', this); // "this" is makeColor
        const { r, g, b } = this;
        console.log('dat-->', this); // "this" is makeColor
        return `rgb(${r},${g},${b})`
    }
    color.hex = function () {
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    return color;
}

const color = makeColor(11, 81, 19);