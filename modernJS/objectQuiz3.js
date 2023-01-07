// 변하지 않는 객체?

const user = {
  name: "John",
};

user.name = "Pete";

console.log(user);

const user2 = {
  name: "Ys",
};

user = user2;

console.log(user, user2);

// const로 선언한 객체의 속성은 변화가 가능하지만 전체를 바꾸면 오류
