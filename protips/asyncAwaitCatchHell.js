async function towerOfTerror() {
    let a;
    let b;
    let c;

    try {
        a = await step1();
    } catch (error) {
        handle(error)
    }

    try {
        b = await step2(a);
    } catch (error) {
        handle(error)
    }

    try {
        c = await step3(b);
    } catch (error) {
        handle(error)
    }

    return a + b + c
}

// option 1
await step1().catch(fun)


async function gettingBetter() {
    const a = await step1().catch(err => handle(err))
    const b = await step2().catch(err => handle(err))
    const c = await step3().catch(err => handle(err))
}

return a + b + c;

// option2
async function awesome(url) {
    try {
        const data = await promise;
        return [data, null]
    } catch (error) {
        console.error(error);
        return [null, error]
    }
}

async function main() {
    const [data, error] = await awesome()
    const [data2, error2] = await awesome()
    const [data3, error3] = await awesome()

    if (eceptionalErorr) {
        //do something exceptional
    }
}