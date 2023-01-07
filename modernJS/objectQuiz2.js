// let fruit = {};

// const isEmpty = (obj) => {
//   if (obj === null) {
//     return "false";
//   } else {
//     return "true";
//   }
// };

// console.log(!!fruit === true);

// // fruit["8:30"] = "get up";

// // isEmpty(fruit);

// in 연산자의 중요성

let fruit = {};

const isEmpty = (obj) => {
  for (a in obj) {
    // a or let a 라고 해도 됨
    return "true";
  }
  return "false";
};

console.log(isEmpty(fruit));

fruit["8:30"] = "get up";

console.log(isEmpty(fruit));
