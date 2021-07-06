const fetchNExtPlanets = (url = "https://swapi.dev/api/planets/") => {
  return axios.get(url);
};
const printPlanets = ({ data }) => {
  console.log(data);
  for (let planet of data.results) {
    console.log(plane.name);
  }
  return Promise.resolve(data.next);
};
fetchNExtPlanets()
  .then(printPlanets)
  .then(fetchNExtPlanets)
  .then(printPlanets)
  .catch((err) => {
    console.log("ERROR!!", err);
  });

//   fetchNExtPlanets()
//   .get("https://swapi.dev/api/planets/")
//   .then(({ data }) => {
//     console.log(data);
//     for (let planet of data.results) {
//       console.log(planet.name);
//     }
//     return fetchNExtPlanets.get(data.next);
//   })
//   .then(({ data }) => {
//     console.log(data);
//     for (let planet of data.results) {
//       console.log(plane.name);
//     }
//   });

//   axios
//   .get("https://swapi.dev/api/planets/")
//   .then(({ data }) => {
//     console.log(data);
//     for (let planet of data.results) {
//       console.log(planet.name);
//     }
//     return axios.get(data.next);
//   })
//   .then(({ data }) => {
//     console.log(data);
//     for (let planet of data.results) {
//       console.log(plane.name);
//     }
//   });
