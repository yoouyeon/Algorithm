function solution(n, left, right) {
  let answer = [];

  // 인덱스에 해당하는 원소를 구하는 함수
  function getElement(idx, n) {
    const row = Math.floor(idx / n); // 2차원 배열 기준 row
    const start = row + 1; // row의 시작 원소의 값
    const startIdx = row * n; // row의 시작 원소의 1차원 배열 기준 인덱스
    if (startIdx + start > idx) return start; // 그림 기준 색칠된 부분
    else return start + (idx - startIdx - row); // 그림 기준 색칠되지 않은 부분
  }

  for (let idx = left; idx <= right; idx++) answer.push(getElement(idx, n));

  return answer;
}
