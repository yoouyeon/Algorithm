function solution(n) {
  let answer = 0;
  const cntOne = getCntOne(n);
  while (answer === 0) {
    n++;
    if (cntOne === getCntOne(n)) answer = n;
  }
  return answer;
}

function getCntOne(n) {
  /**
   * n을 2진수로 변환 후 1의 개수를 세기
   * 1. n을 2진수로 변환
   * 2. 1을 기준으로 split ('100100' -> ['','00','00'] 의 결과가 나와서 실제 1의 개수보다 1 많게 나온다.)
   * 3. split된 배열의 길이 - 1
   */
  return n.toString(2).split("1").length - 1;
}
