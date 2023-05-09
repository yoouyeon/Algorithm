function solution(s) {
  let stack = [];
  // 문자열의 처음부터 끝까지 한번만 순회한다.
  for (let i = 0; i < s.length; i++) {
    if (stack.length !== 0 && stack[stack.length - 1] === s[i]) {
      // stack에서 pop만 해줘도 s의 인덱스도 함께 움직이기 때문에 짝지어 제거 가능
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  // 만약 stack이 비어있다면 모든 문자를 제거한 것이므로 1을 반환
  if (stack.length === 0) return 1;
  // 그 외에는 제거 불가능하므로 0을 반환.
  return 0;
}
