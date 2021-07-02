fetch("https://swapi.dev/api/planets/")
  .then((response) => {
    if (!response.ok) {
      console.error("ERROOORRRRRR not status 200");
      throw new Error(`Status Code Error: ${response.status}`);
    } else {
      // return a promise so that we do not nest when chaining
      return response.json();
    }
  })
  .then((data) => {
    for (let planet of data.results) {
      console.log(planet);
      console.log(planet.name);
    }
    const filmUrl = data.results[0].films[0];
    return fetch(filmUrl);
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Status Code Error: ${response.status}`);
    } else {
      // return a promise so that we do not nest when chaining
      return response.json();
    }
  })
  .then((data) => {
    console.log("Films based on planet");
    console.log(data);
  })
  .catch((err) => {
    // this only runs when we do not get a response from the server eg when internet is down no response is received at all
    console.error("ERROR IS -->", err);
  });

// fetch("https://swapi.dev/api/planets/")
//   .then((response) => {
//     // this runs regardless weather its 200, 400, 500 in the case its not 200 it will set okay as false i think
//     if (!response.ok) {
//       console.error("ERROOORRRRRR not status 200");
//     } else {
//       response.json().then((data) => {
//         console.log("data is -->", data);
//         for (let planet of data.results) {
//           console.log(planet);
//           console.log(planet.name);
//         }
//       });
//       console.log("RESPONSE comes back as a stream-->", response);
//       console.log(
//         "CHANGE TO JSON SO WE CAN USE IT RETURNS PROMISE-->",
//         response.json()
//       );
//     }
//   })
//   .catch((err) => {
//     // this only runs when we do not get a response from the server eg when internet is down no response is received at all
//     console.error("ERROR IS -->", err);
//   });
