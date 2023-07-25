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

// 단순 구현 풀이 : 시간 초과
/*
function solution(n, left, right) {
    // step 1: 2차원 배열 만들기
    const matrix = new Array(n);
    for(let i = 0; i < n; i++)
        matrix[i] = new Array(n);    
    for(let i = 1; i <= n; i++) {
        for (let row = 0; row < i; row++) {
            if (row === i - 1) {
                for (let col = 0; col <= row; col++)
                    matrix[row][col] = i;
                continue;
            }
            matrix[row][i - 1] = i;
        }
    }

    // step 2: 1차원 배열로 만들기
    const array = matrix.reduce((acc, cur) => acc = acc.concat(cur), []);
    
    // step 3: left부터 right까지 자르기
    const answer = array.slice(left, right + 1);
    
    return answer;
}
*/
