/* 제곱근만큼 반복하는 방법 (CPP) */
/*
#include <string>
#include <vector>

using namespace std;

int get_divisor_cnt(int num) {
    int ret = 0;
    for(int i = 1; i * i <= num; i++) {
        if (num % i == 0) {
            if (i * i == num)
                ret++;
            else
                ret += 2;
        }
    }
    return (ret);
}

int solution(int left, int right) {
    int answer = 0;

    for(int i = left; i <= right; i++) {
        int sign = (get_divisor_cnt(i) % 2 == 0) ? 1 : -1;
        answer += sign * i;
    }
    return answer;
}
*/

/* 1번의 연산 (제곱근 구하기) 로 푸는 방법 (JS) */
function solution(left, right) {
  let answer = 0;
  for (let num = left; num <= right; num++) {
    const sign = Number.isInteger(Math.sqrt(num)) ? -1 : 1;
    answer += sign * num;
  }
  return answer;
}
