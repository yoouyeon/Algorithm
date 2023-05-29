function solution(n) {
  let ans = 0;
  let curr = n;

  while (curr !== 0) {
    // 2의 배수라면 순간이동으로 이동 가능
    if (Number.isInteger(curr / 2)) curr /= 2;
    else {
      // 그 외에는 1칸 점프하여 2의 배수로 만들어주기
      ans++;
      curr--;
    }
  }

  return ans;
}
