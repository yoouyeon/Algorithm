function solution(cards1, cards2, goal) {
  let answer = "Yes";
  goal.every((word) => {
    if (cards1.at(0) === word) {
      cards1.shift();
      return true;
    } else if (cards2.at(0) === word) {
      cards2.shift();
      return true;
    }
    answer = "No";
    return false;
  });
  return answer;
}
