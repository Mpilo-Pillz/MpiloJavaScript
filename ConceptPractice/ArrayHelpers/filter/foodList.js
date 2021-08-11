let foodList = [
  { id: 1, foodItem: "Pizza", isHealthyFood: false },
  { id: 2, foodItem: "Pie", isHealthyFood: false },
];
function deleteOne(id) {
  foodList = foodList.filter((item) => {
    console.log("item -->", item.id);

    return item.id !== parseInt(id);
  });
}

deleteOne("1");
console.log(foodList);
