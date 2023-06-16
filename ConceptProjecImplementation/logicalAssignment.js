const ufcChampions = {
    heavyweight: "",
    strawWeight: "Zhang Weili",
    wFlyweight: "VALENTINA SHEVCHENKO",
    mFeatherweight: "ALEXANDER VOLKANOVSKI",
    mFlyweight: "BRANDON MORENO"

}

console.log(`The Heavyweight champion is ${ufcChampions.heavyweight ||= "currently vacant"}`) // mutatess the object
console.log(`The Heavyweight champion is ${ufcChampions.heavyweight || "currently vacant"}`) // does not mutate the object
console.log(`The Straweight champion is ${ufcChampions.strawWeight ||= "currently vacant"}`)
console.log(`The Featherweight champion is ${ufcChampions.mFeatherweight ||= "currently vacant"}`)
console.log(`The Women's Flyweight champion is ${ufcChampions.wFlyweight ||= "currently vacant"}`)
console.log(`The Men's Flyweight champion is ${ufcChampions.mFlyweight ||= "currently vacant"}`)

console.log(ufcChampions.heavyweight);

console.log(ufcChampions)
// prints ufcChampions = {
  //  heavyweight: "currently vacant",
    //strawWeight: "Zhang Weili",
    //wFlyweight: "VALENTINA SHEVCHENKO",
    //mFeatherweight: "ALEXANDER VOLKANOVSKI",
    //mFlyweight: "BRANDON MORENO"

//}