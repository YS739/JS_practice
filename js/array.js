let testArr = [1, 2, 3, 4, 5];

const mappedArr = testArr.map((item) => item * 2);

const filteredArr = testArr.filter((item) => {
  return item > 10 ?? item;
});

testArr.reduce((a, b) => {
  console.log(a, b);
  return (a = b * 2);
}, 0);
