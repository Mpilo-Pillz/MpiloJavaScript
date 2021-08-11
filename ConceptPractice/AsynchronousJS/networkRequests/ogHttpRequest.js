const myReq = new XMLHttpRequest();

myReq.onload = function () {
  const data = JSON.parse(this.responseText);
  console.log(data);
};
myReq.onerror = function (err) {
  console.log("ERROR", err);
};

myReq.open("get", "https://localhost:3000/todo", true);
myReq.setRequestHeader("Accept", "application/json");
myReq.send();
