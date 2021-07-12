async function get3SequentialPokemon() {
    const poke1 = await axios.get("https://pokeapi.co/api/v2/pokemon/1")
    const poke2 = await axios.get("https://pokeapi.co/api/v2/pokemon/2")
    const poke3 = await axios.get("https://pokeapi.co/api/v2/pokemon/3")

    console.log(poke1.data);
    console.log(poke2.data);
    console.log(poke2.data);
}

async function get3ParalellUndefinedPokemon() {
    const poke1 = axios.get("https://pokeapi.co/api/v2/pokemon/1")
    const poke2 = axios.get("https://pokeapi.co/api/v2/pokemon/2")
    const poke3 = axios.get("https://pokeapi.co/api/v2/pokemon/3")

    await poke1
    await poke2
    await poke3

    // undefined prints before resolution
    console.log(poke1.data);
    console.log(poke2.data);
    console.log(poke3.data);
}

async function get3ParalellPokemon() {
    const prom1 = axios.get("https://pokeapi.co/api/v2/pokemon/1")
    const prom2 = axios.get("https://pokeapi.co/api/v2/pokemon/2")
    const prom3 = axios.get("https://pokeapi.co/api/v2/pokemon/3")

    console.log(prom1) //prints pending state
    const poke1 = await prom1
    const poke2 = await prom2
    const poke3 = await prom3
    console.log(prom1); //prints resolved state

    // works
    console.log(poke1.data);
    console.log(poke2.data);
    console.log(poke3.data);
}

function changeBodyColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve()
        }, delay)
    })
}

async function lightShow() {
    await changeBodyColor('salmon', 1000);
    await changeBodyColor('teal', 2000)
    await changeBodyColor('orangered', 3000)
    await changeBodyColor('indigo', 3000)
    await changeBodyColor('violet', 3000)
}

async function paralellLightShow() {
    const p1 = changeBodyColor('salmon', 1000);
    const p2 = changeBodyColor('teal', 2000)
    const p3 = changeBodyColor('orangered', 3000)
    const p4 = changeBodyColor('indigo', 3000)
    const p5 = changeBodyColor('violet', 3000)

    await p1;
    await p2;
    await p3;
    await p4;
    await p5;
}

lightShow()



get3ParalellPokemon()
get3ParalellUndefinedPokemon()
get3SequentialPokemon();