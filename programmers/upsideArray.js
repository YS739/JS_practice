let num_list = [1, 2, 3, 4, 5];

// 1. 배열의 길이를 구한다.
// 2. 각 원소의 순서에 배열의 길이부터 -1씩 빼고 순서를 재할당
// 3. 예외 처리 필요 =

const solution = (num_list) => {
  let answer = [];
  const arrLength = num_list.length;
  for (let i = 0, f = 1; i < arrLength, f <= arrLength; i++, f++) {
    let newOrder = (num_list[i] = num_list[arrLength - f]);
    answer.push(newOrder);
  }
  return answer;
};
