const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random();
      if (rand < 0.5) {
        reject({ status: 404 });
      } else {
        const pages = {
          "/users": [
            { id: 5, username: "Lindiwe" },
            { id: 10, username: "Simele" },
          ],
          "/about": "This is the about page",
        };
        const data = pages[url];
        if (data) {
          resolve({ status: 200, data });
        } else {
          reject({ status: 404 });
        }
      }
    }, 3000);
  });
};

fakeRequest("/users")
  .then((res) => {
    console.log(`${res.status} REQUEST WORKED. ->This is the`);
    console.log(res.data);
  })
  .catch((res) => console.log(`${res.status} REQUEST FAILED`));

fakeRequest("/about")
  .then((res) => {
    console.log(`${res.status} REQUEST WORKED. ->This is the`);
    console.log(res.data);
  })
  .catch((res) => console.log(`${res.status} REQUEST FAILED`));

fakeRequest("/contact")
  .then((res) => {
    console.log(`${res.status} REQUEST WORKED. ->This is the`);
    console.log(res.data);
  })
  .catch((res) => console.log(`${res.status} REQUEST FAILED`));
