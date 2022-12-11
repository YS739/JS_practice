// 캐릭터의 좌표 풀다 만 것

function solution(keyinput, board) {
  let answer = [];
  let rCount = 0;
  let lCount = 0;
  let uCount = 0;
  let dCount = 0;

  for (i = 0; i < keyinput.length; i++) {
    if (keyinput[i] === "right") {
      rCount++;
    } else if (keyinput[i] === "left") {
      lCount++;
    } else if (keyinput[i] === "up") {
      uCount++;
    } else if (keyinput[i] === "down") {
      dCount++;
    }
  }
  let b0 = rCount - lCount;
  let b1 = uCount - dCount;

  if (b0 > 0 && (board[0] = 1)) {
    b0 = board[0];
  } else if (b0 > 0 && board[0] > 1) {
    if (b0 >= (board[0] - 1) / 2) {
      b0 = (board[0] - 1) / 2;
    }
  }
  console.log(b0);

  if (b0 < 0) {
    if ((board[0] = 1)) {
      b0 = -board[0];
    } else if (b0 < -(board[0] - 1) / 2) {
      b0 = -(board[0] - 1) / 2;
    }
  }
  answer.push(b0, b1);
  return answer;
}
