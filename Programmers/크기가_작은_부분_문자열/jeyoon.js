function solution(t, p) {
  let answer = 0;
  const numP = parseInt(p);
  const lenP = p.length;
  for (let i = 0; i <= t.length - lenP; i++) {
    const substr = t.slice(i, i + lenP);
    parseInt(substr) <= numP && answer++;
  }
  return answer;
}
