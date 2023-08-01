function solution(arr1, arr2) {
  // step 1 : 정답 행렬 초기화
  let answer = new Array(arr1.length);
  for (let i = 0; i < answer.length; i++) {
    answer[i] = new Array(arr2[0].length);
  }

  // step 2 : 행렬 곱셈
  const getElement = (rowIdx, colIdx) => {
    // 정답 행렬에서 rowIdx, colIdx에 해당하는 원소를 구하는 함수
    let ret = 0;
    for (let i = 0; i < arr1[0].length; i++) {
      ret += arr1[rowIdx][i] * arr2[i][colIdx];
    }
    return ret;
  };

  for (let rowIdx = 0; rowIdx < answer.length; rowIdx++) {
    for (let colIdx = 0; colIdx < answer[0].length; colIdx++) {
      answer[rowIdx][colIdx] = getElement(rowIdx, colIdx);
    }
  }

  return answer;
}
