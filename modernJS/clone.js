const _ = require("lodash");

let a = {
  name: "john",
  age: 23,
  friend: { name: "john", family: { name: "sunny" } },
};

let clone1 = _.cloneDeep(a);

clone1.friend.name = "john2";

console.log("a:", a.friend.name);
console.log("clone1", clone1.friend.name);
