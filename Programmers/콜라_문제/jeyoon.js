function solution(a, b, n) {
  let answer = 0; // 지금까지 받은 콜라의 개수
  // 상수 저장
  const emptyCoke = a;
  const fullCoke = b;
  const startEmptyCoke = n;

  // 사용할 변수 저장
  let empty = startEmptyCoke;
  let full = 0;

  // 빈 병이 giveBottle개 이상일 때 까지 반복
  while (empty >= emptyCoke) {
    // 현재 빈 병으로 받을 수 있는 콜라 묶음 구하기
    const cokeBox = Math.floor(empty / emptyCoke);
    // 바꿔서 사라진 빈병 업데이트
    empty = empty - emptyCoke * cokeBox;
    // 새로 얻은 병 업데이트
    full = fullCoke * cokeBox;
    answer += full;
    // 받은 병 마셔셔 빈병으로 만들기
    empty = empty + full;
  }

  return answer;
}
