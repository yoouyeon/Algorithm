/*
 * @param {number} curr - 현재 더하는 값
 * @param {number} sum - 지금까지 더한 값의 합
 * @param {number} goal - 목표 값 (= n)
 * @return {boolean} - 현재까지의 합으로 goal을 만들 수 있는 경우 true 반환
 */
function getAnswer(curr, sum, goal) {
  // 현재 더하는 숫자가 0 이하이면 더 이상 더할 수 없으므로 false 반환
  if (curr <= 0) return false;
  const temp = curr + sum;
  // 더한 값이 목표 값과 같으면 true 반환
  if (goal === temp) {
    return true;
  }
  // 더한 값이 목표 값보다 크면 더 이상 더하는 의미가 없으므로 false 반환
  if (goal < temp) {
    return false;
  }
  // 더한 값이 목표 값보다 작으면 다음 숫자(연속된 작은 숫자)를 더해본다.
  return getAnswer(curr - 1, temp, goal);
}

function solution(n) {
  // 1인 경우에는 경우의 수가 1개이므로 1 반환
  if (n === 1) return 1;
  let answer = 1; // 자기 자신으로 표현하는 경우의 수 1개
  // n / 2 를 올림한 값부터 1까지의 숫자를 시작으로 해서 연속된 숫자를 더해본다.
  for (let i = Math.ceil(n / 2); i > 0; i--) {
    if (getAnswer(i, 0, n)) answer++;
  }
  return answer;
}
