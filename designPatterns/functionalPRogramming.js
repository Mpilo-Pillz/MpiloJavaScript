let num = 123;

function convertToString(val) {
    // num = val mutating num  makes it an impure funtion. 
    // pure functions should not rely on any outside value to produce a return value
    // pure functions should have no side effects
    return val.toString();
}

const str = toString(num);
console.log(typeof str);

// data is immutable
const data = Object.freeze([1, 2, 3, 4, 5, 6]);

const addEmoji = (val) => convertToString(val) + ' 🤪';

const emojiData = data.map(addEmoji);
console.log(emojiData);

const appendEmoji = (fixed) => (dynamic) => fixed + dynamic;

const rain = appendEmoji("🌨");
const sun = appendEmoji("🌞");

console.log(rain(' today'));
console.log(rain(' tomorrow'));