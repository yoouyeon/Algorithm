function solution(elements) {
  const sumSet = new Set();
  circularElements = elements.concat([...elements]); // 배열 이어붙여주기 (원형연결리스트 효과)
  for (let winSize = 1; winSize <= elements.length; winSize++) {
    let sum = 0;
    for (let start = 0; start < elements.length; start++) {
      if (start === 0) {
        // 첫번째 반복에는 슬라이딩 윈도우 합 초기화 해 주기
        for (let idx = start; idx < winSize; idx++)
          sum += circularElements[idx];
      } else {
        // 이후 반복부터는 윈도우의 앞 원소를 빼 주고 윈도우 마지막 원소를 추가해주기
        sum -= circularElements[start - 1];
        sum += circularElements[start + winSize - 1];
      }
      sumSet.add(sum);
    }
  }

  return sumSet.size;
}
