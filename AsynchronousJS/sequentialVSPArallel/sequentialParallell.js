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
        })
    }, delay)
}

changeBodyColor('teal', 2000)

get3ParalellPokemon()
get3ParalellUndefinedPokemon()
get3SequentialPokemon();