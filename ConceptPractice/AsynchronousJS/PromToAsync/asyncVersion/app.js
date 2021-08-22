async function myFetch() {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  let todo = await response.json();
  let post = document.createElement("div");
  post.innerHTML = post;
  document.appendChild(post);
}

myFetch().catch((e) => console.error("error encountered"));

myFetch()
  .then((data) => {
    let todo = await response.json();
    let post = document.createElement("div");
    post.innerHTML = post;
    document.appendChild(post);
  })
  .catch((e) => console.error("error encountered"));
