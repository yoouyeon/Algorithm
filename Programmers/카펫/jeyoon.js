/* 약수 배열을 미리 구하는 풀이 (2번 순회) */
/*
function getDivisorList(num) {
  const ret = [];
  for (let n = 1; n <= Math.sqrt(num); n++) {
    if (num % n === 0) ret.push({ a: n, b: num / n });
  }
  return ret;
}

function solution(brown, yellow) {
  let answer = [];
  // yellow의 약수 목록 구해주기
  const divisor_list = getDivisorList(yellow);
  // 약수 목록을 돌면서 조건에 만족하는 width와 height를 만들 수 있는지 확인하기
  divisor_list.every((divisor_pair) => {
    const width = divisor_pair.b + 2;
    const height = divisor_pair.a + 2;
    if (2 * (width + height - 2) === brown) {
      answer = [width, height];
      return false;
    }
    return true;
  });
  return answer;
}
*/

/* 약수를 구함과 동시에 width, height 여부를 확인하는 풀이 (1번 순회) */
function solution(brown, yellow) {
  let answer = [];
  for (let n = 1; n <= Math.sqrt(yellow); n++) {
    if (yellow % n === 0) {
      const height = n + 2;
      const width = yellow / n + 2;
      if (2 * (height + width - 2) === brown) {
        return [width, height];
      }
    }
  }
  return answer;
}
