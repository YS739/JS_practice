// 프로퍼티 합계 구하기
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

// console.log(salaries.Ann);
// console.log(salaries["Ann"]);

let sum = 0;

for (let key in salaries) {
  sum += salaries[key];
}

console.log(sum);
