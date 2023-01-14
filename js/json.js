fetch("https://jsonplaceholder.typicode.com/todos/")
  .then((res) => res.json())
  .then((data) => {
    for (item of data) {
      console.log(item["title"]);
    }
  });
