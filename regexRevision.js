const matchAnywhere = "/someWord/g"; // with out the g it matches one else it matches anywhere on the string
const caseSensitivity = "/someWord/gi"


// let string = "My name is Shumail";
// let toBeRemove = "Shumail";
// string = string.replace(tobeRemove, '');

const url = "/Users/name/surname/myProjects/portfolioProjects/portfolio-project-places/places-express/dist/src/uploads/images/e95f1a20-7ca7-11ed-945a-613eb2e486d0.jpeg"

const newUrl = url.replace("/Users/name/surname/myProjects/portfolioProjects/portfolio-project-places/places-express/dist/src/", "");
console.log("------>", newUrl);
