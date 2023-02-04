var newArr = [10, 20, 30].map(function (currentValue, index) {
  console.log(currentValue, index);
  return currentValue + 5;
});
console.log(newArr);

// 과제 - 콜백을 이용한 움직이는 원
// showCircle(150, 150, 100, (div) => {
//   div.classList.add("message-ball");
//   div.append("안녕하세요!");

//   // ???
//   div.onload = () => callback(div);
// });
