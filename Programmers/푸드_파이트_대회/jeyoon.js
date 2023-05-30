function solution(food) {
  let answer = "0";

  for (let i = food.length - 1; i > 0; i--) {
    const cnt = Math.floor(food[i] / 2);
    const str = i.toString().repeat(cnt);
    answer = str + answer + str;
  }

  return answer;
}
