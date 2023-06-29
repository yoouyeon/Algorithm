#include <vector>

using namespace std;

int solution(int n) {
    int answer = 0;
    vector<int> sum(n+1, 0);
    // 누적 합
    for (int i = 1; i <= n; i++) {
        sum[i] = i;
        sum[i] += sum[i - 1];
    }
    // 구간 합
    int end = n;
    while (end > 0) {
        int temp = end - 1;
        while (temp >= 0) {
            if (sum[end] - sum[temp] > n) break ;
            if (sum[end] - sum[temp] == n) {
                answer++;
                break ;
            }
            temp--;
        }
        end--;
    }
    return answer;
}
