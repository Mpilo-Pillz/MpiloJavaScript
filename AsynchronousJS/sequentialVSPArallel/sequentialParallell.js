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


get3ParalellUndefinedPokemon()
get3SequentialPokemon();