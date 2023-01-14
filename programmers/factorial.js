const solution = (num) => {
  let answer = 1;
  for (var i = 1; i <= 10; i++) {
    if (factorial(i) <= num) {
      answer = i;
      break;
    }
  }
  return answer;
};

console.log(solution(5));
// 팩토리얼을 구하는 함수
const factorial = (num) => {
  if ((num = 1)) return 1;
  return factorial(num - 1) * num;
};

// 구글링해서 참고한 답안
function solution(n) {
  let answer = 1;
  for (i = 1; i <= 10; i++) {
    answer *= i;
    if (answer === n) return i;
    if (answer > n) return i - 1;
  }
}
