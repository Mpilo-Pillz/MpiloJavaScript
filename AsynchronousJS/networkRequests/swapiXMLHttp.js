const firstReq = new XMLHttpRequest();
firstReq.addEventListener("load", () => {
  console.log("Works");
  console.log("RAW JSON that is why we parse-->", firstReq.responseText);
  const changeStringToJSON = JSON.parse(firstReq.responseText);
  console.log("Passed as in PARSE!!! ->", changeStringToJSON);

  for (let planet of changeStringToJSON.results) {
    console.log(planet.name);
  }
  // send it back to a string
  // const parseBackToString = JSON.stringify(changeStringToJSON);
  // console.log("Stringifying -->", parseBackToString);
});
firstReq.addEventListener("error", () => {
  console.error("THERE WAS AN ERROR");
});
firstReq.open("GET", "https://swapi.dev/api/planets/");
firstReq.send();
console.log("Request Sent!");

//***** */ DON NOT DO
// const whatWasThatFunnyCode = JSON.parse(JSON.stringify(parseJSON))
// const orWasIt = JSON.parse(JSON.stringify(JSON.parse(firstReq.responseText)))
// const iThinkItWas = JSON.parse(JSON.stringify(firstReq.responseText))
// const iThinkItWas = JSON.stringify(JSON.parse(parseJSON))
