function solution(n) {
  let answer = 0;
  let fibo = new Array(100001);
  const MOD = 1234567;
  fibo[0] = 0;
  fibo[1] = 1;

  for (let i = 2; i <= n; i++)
    fibo[i] = (fibo[i - 1] % MOD) + (fibo[i - 2] % MOD);

  answer = fibo[n] % MOD;

  return answer;
}
