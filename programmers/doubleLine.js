// 겹치는 선분의 길이 풀다 만 것

function solution(lines) {
  const a1 = lines[0][0];
  const b1 = lines[0][1];
  const a2 = lines[1][0];
  const b2 = lines[1][1];
  const a3 = lines[2][0];
  const b3 = lines[2][1];

  const newLines = [
    [a2, b1],
    [a3, b2],
    [a3, b1],
  ];
  console.log(newLines);
  if (b1 > a2) {
    return b1 - a2;
  } else if (b2 > a3) {
    return b2 - a3;
  } else if (b1 > a3) {
    return b1 - a3;
  } else {
    return 0;
  }
}
