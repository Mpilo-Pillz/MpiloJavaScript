async function getData() {
  try {
    const data = await axios.get("https://swapi.dev/api/planets/");
    console.log(data);
    console.log(data);
    return data;
  } catch (e) {
    console.log(`error caught -->`, e);
  }
}

getData().then((data) => console.log(data));
function getData() {
  const data = axios.get("https://swapi.dev/api/planets/").then((data) => {
    console.log(data);
  });
  console.log(data);
  return data;
}
getData().then((data) => console.log(data));
