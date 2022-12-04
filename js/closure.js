const increase = (function () {
  // 카운트 상태 변수
  let num = 0;
  // 클로저
  return function () {
    return ++num;
  };
})();
// 이전 상태값을 유지
console.log(increase()); //1
console.log(increase()); //2
console.log(increase()); //3
