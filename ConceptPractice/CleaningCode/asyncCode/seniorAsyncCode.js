const askQuestion = require('./senior/askQuestion');

async function main() {
    const name = await askQuestion("What is your name? ")
    const job = await askQuestion("What is your job? ")
    const age = await askQuestion("How old are you? ")

    console.log(`hello ${name}. You are a ${age} year old ${job}`);
}

main()