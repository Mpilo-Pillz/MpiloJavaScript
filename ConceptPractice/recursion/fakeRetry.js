const retryIncreaseTimeOut = (numberOfRetries, second) => {
    const interval = setInterval(() => {
        // add seconds plus 1
        console.log(`An error occured, retying in ${second}`);
        // recursion deduct
    }, seconds)
}