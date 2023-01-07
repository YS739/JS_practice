let user = {};
// const는 user=...를 전체적으로 설정하려고 할 때만 오류가 발생
user.name = "John";

user.surname = "Smith";

user.name = "Pete";

user.name = "J";

console.log(user);
