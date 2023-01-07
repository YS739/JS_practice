// 프로퍼티 값 두 배로 부풀리기

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

console.log(menu["width"]);

// const multiplyNumeric = (obj) => {
//   for (key in obj) {
//     if (typeof obj["key"] === Number) {
//       obj["key"] = obj["key"] * 2;
//     }
//     return obj;
//   }
// };

const multiplyNumeric = (obj) => {
  for (key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
  return obj;
};

console.log(multiplyNumeric(menu));
