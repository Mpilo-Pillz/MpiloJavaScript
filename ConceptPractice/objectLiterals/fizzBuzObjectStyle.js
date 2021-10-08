const question = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const divisibles = [
    {
        3: "Fizz"
    },
    {
        5: "Buzz"
    },
    {
        7: "foo"
    }
];

const parseArr = (arr = [], divisibles = []) => {
    const newArr = []

    arr.map((num) => {
        if (!num) return false;

        let newWord = "";

        divisibles.map((divisible) => {
            console.log("-->", Object.keys(divisible)[0])
            console.log("At0-->", Object.keys(divisible))
            if (num % Object.keys(divisible)[0] === 0) {
                const wordPart = Object.values(divisible)[0];

                newWord += wordPart;
            }

            return false;
        });

        newArr.push(`${newWord || num}, `);

        return false;
    });

    return newArr;
}

console.log(parseArr(question, divisibles));