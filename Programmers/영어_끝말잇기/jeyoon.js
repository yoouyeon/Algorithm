function setAnswer(n, idx) {
  // [사람 번호, 차례]
  let num = (idx + 1) % n;
  let order = Math.trunc((idx + 1) / n) + 1;
  // 각 턴마다 마지막 순서의 경우 예외처리
  if (num === 0) {
    num = n;
    order -= 1;
  }
  return [num, order];
}

function solution(n, words) {
  let answer = [];
  const wordMap = new Map();
  let lastChar = "";

  // words 배열을 하나씩 돌면서 탈락 조건을 확인해준다.
  words.every((word, idx) => {
    if (idx !== 0) {
      if (word[0] !== lastChar || wordMap.get(word) !== undefined) {
        answer = setAnswer(n, idx);
        return false;
      }
    }
    lastChar = word.at(-1);
    wordMap.set(word, true);
    return true;
  });

  // 탈락자가 없는 경우의 답
  if (answer.length === 0) {
    answer = [0, 0];
  }

  return answer;
}
