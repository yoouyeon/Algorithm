function solution(s) {
  let answer = [];
  const checker = new Map();

  s.split("").forEach((word, index) => {
    const res =
      checker.get(word) !== undefined ? index - checker.get(word) : -1;
    answer.push(res);
    checker.set(word, index);
  });

  return answer;
}

/*

// lastIndexOf 를 활용한 풀이

function solution(s) {
    let answer = [];
    
    answer.push(-1); // 가장 첫번째 문자는 자신의 앞에 같은글자가 없다.
    for (let idx = 1; idx < s.length; idx++) {
        const lastIdx = s.lastIndexOf(s[idx], idx - 1);
        lastIdx === -1 ? answer.push(lastIdx) : answer.push(idx - lastIdx);
    }
    
    return answer;
}

*/
