function solution(number) {
  let answer = 0;

  const getTrio = (currComb, currIdx) => {
    if (currComb.length === 3) {
      // 3명을 다 뽑았으면 답 여부를 확인해서 answer 증가시키기
      const sum = currComb.reduce((sum, num) => (sum += num), 0);
      sum === 0 && answer++;
      return;
    }
    for (let i = currIdx + 1; i < number.length; i++) {
      // 현재까지의 조합에 뒤 숫자를 추가한 배열을 담아 다시 조합 구하기
      getTrio([...currComb, number[i]], i);
    }
  };

  for (let idx = 0; idx <= number.length - 3; idx++) {
    // idx번째 수를 시작으로 하는 조합 만들기
    getTrio([number[idx]], idx);
  }

  return answer;
}
