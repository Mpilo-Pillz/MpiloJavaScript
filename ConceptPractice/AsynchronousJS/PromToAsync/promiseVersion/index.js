fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    console.log(res.json());
    return res.json();
  })
  .then((todo) => {
    let post = document.createElement("div");
    post.innerHTML = post;
    document.appendChild(post);
  })
  .catch((e) => console.error(`issue fetching: ${e.message}`));
