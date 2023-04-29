function solution(s) {
  let answer = true;
  // let stack = [];
  let stackCounter = 0;
  const stringArr = s.split("");

  stringArr.every((c) => {
    // 여는 괄호일 경우 -> 스택에 넣어둔다.
    if (c === "(") {
      // stack.push(c);
      stackCounter++;
      return true;
    }
    // 닫는 괄호일 경우 -> 열려 있는 괄호가 없는 경우 -> 올바른 괄호가 아님
    if (stackCounter == 0) {
      answer = false;
      return false;
    }
    // 닫는 괄호인 경우 -> 열려 있는 괄호가 있는 경우 -> 닫아주고 스택에서 뺀다.
    stackCounter--;
    return true;
  });

  // 닫히지 않은 괄호가 남아있는 경우
  if (stackCounter != 0) {
    answer = false;
  }

  return answer;
}
