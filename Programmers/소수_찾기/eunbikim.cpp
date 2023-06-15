#include <cmath>
#include <vector>

using namespace std;

int solution(int n) {
    int answer = 0;
    vector<int> arr(n + 1, 0);
    for (int i = 2; i <= sqrt(n); i++) {
        if (arr[i] == 1)
            continue ;
        for (int j = i * i; j <= n; j += i)
            arr[j] = 1;
    }
    for (int k = 2; k <= n; k++) {
        if (arr[k] == 0)
            answer++;
    }
    return answer;
}
