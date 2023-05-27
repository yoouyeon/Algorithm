function BFS(n) {
  const MOD = 1234567;
  const queue = [1, 2]; // 맨 처음 1칸, 2칸 가는 방법 2가지로 초기화
  let cnt = 0;
  while (queue.length !== 0) {
    const curr = queue.pop();
    if (curr === n) {
      cnt = cnt + 1 === MOD ? 0 : cnt + 1;
      continue;
    }
    if (curr + 1 <= n) queue.push(curr + 1);
    if (curr + 2 <= n) queue.push(curr + 2);
  }
  return cnt;
}

function DP(n) {
  const MOD = 1234567;
  const memo = Array(2001);
  memo[0] = 0;
  memo[1] = 1;
  memo[2] = 2;
  if (n === 1 || n === 2) return memo[n];
  for (let idx = 3; idx <= n; idx++) {
    memo[idx] = (memo[idx - 1] % MOD) + (memo[idx - 2] % MOD);
  }
  return memo[n] % MOD;
}

function solution(n) {
  // let answer = BFS(n); // 시간초과 ^_^
  let answer = DP(n);
  return answer;
}
