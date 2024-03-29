function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making Request to ${location}`)
        if (location === 'Google') {
            resolve('Google says hi')
        } else {
            reject('We can only talk to Google')
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Processing response');
        resolve(`Extra Infomration + ${response}`);
    })
}

makeRequest('Google').then(response => {
    console.log('Response Received')
    return processRequest(response)
}).then(processedResponse => {
    console.log(processedResponse)
}).catch(err => {
    console.error(err);
})

async function doWork() {

    try {
        const response = await makeRequest('Google');
        console.log(processedResponse);
        const processedResponse = await processedResponse(response)
        console.log(processedResponse);
    } catch (err) {
        console.error(err);
    }

    doWork();
}