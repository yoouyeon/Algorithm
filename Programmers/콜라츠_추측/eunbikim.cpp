#include <string>
#include <vector>
#include <iostream>

using namespace std;

int collatz(long long num, int cnt) {
    if (num == 1)
        return cnt;
    if (cnt > 500)
        return -1;
    if (num % 2 == 0)
        num /= 2;
    else {
        num *= 3;
        num += 1;
    }
    cnt = collatz(num, cnt + 1);
    return cnt;
}

int solution(int num) {
    int answer = 0;
    if (num == 1)
        return answer;
    answer = collatz(num, answer);
    return answer;
}

int main(void) {
	cout << solution(626331);
}
