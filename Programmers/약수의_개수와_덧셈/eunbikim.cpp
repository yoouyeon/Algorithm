#include <string>
#include <vector>

using namespace std;

int getDivisorCount(int num)  {
    int cnt = 0;
    for (int i = 1; i <= num / 2; i++) {
        if (num % i == 0)
            cnt++;
    }
    return cnt + 1;
}

bool isOdd(int cnt) {
    return (cnt % 2 == 1 ? 1 : 0);
}

int solution(int left, int right) {
    int answer = 0;
    for (int i = left; i <= right; i++)
        isOdd(getDivisorCount(i)) ? answer -= i : answer += i;
    return answer;
}
