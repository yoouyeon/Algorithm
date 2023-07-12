const pair = {
  "]": "[",
  "}": "{",
  ")": "(",
};

function checkStr(arr) {
  const stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(" || arr[i] === "[" || arr[i] === "{") {
      stack.push(arr[i]);
      continue;
    }
    if (stack.length === 0) return false;
    const top = stack.pop(); // 현재 스택에 있는 괄호
    const goal = pair[arr[i]]; // 스택에 있어야 하는 괄호
    if (top !== goal) return false;
  }
  if (stack.length !== 0) return false;
  return true;
}

function solution(s) {
  let answer = 0;
  const arr = s.split("");
  // tc 번 회전시킬 수 있다.
  for (let tc = 0; tc < s.length; tc++) {
    // 체크하기
    if (checkStr(arr) === true) answer++;
    // 회전시키기
    const front = arr.shift();
    arr.push(front);
  }
  return answer;
}
