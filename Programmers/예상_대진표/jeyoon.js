function solution(n, a, b) {
  let answer = 1;
  let left = Math.min(a, b);
  let right = Math.max(a, b);

  while (Number.isInteger(left / 2) || left + 1 !== right) {
    // 다음 번호 구하기
    left = Math.ceil(left / 2);
    right = Math.ceil(right / 2);
    answer++;
  }
  return answer;
}
