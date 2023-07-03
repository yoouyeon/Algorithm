#include <iostream>
#include <cstring>
#include <algorithm>
using namespace std;

// dp : index번째 포도주까지 있을 때 최대로 마실 수 있는 포도주의 양
int n, wine[10001], dp[10001];

int main() {
    ios::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    memset(dp, 0, sizeof(dp));
    memset(wine, 0, sizeof(wine));
    cin >> n;
    for (int i=1; i<=n; i++) {
        cin >> wine[i];
    }

    if (n == 1) {
        cout << wine[1] << '\n';
        return (0);
    }

    dp[1] = wine[1];
    if (n >= 2)
        dp[2] = wine[1] + wine[2];
    if (n >= 3)
        dp[3] = max(dp[2], max(wine[1] + wine[3], wine[2] + wine[3]));
    for (int i = 4; i <= n; i++) {
        // case 1: i번째 포도주를 마시고 i-1번째 포도주를 마신 경우 (🍷 ❌ 🍷 🍷)
        int case1 = dp[i-3] + wine[i-1] + wine[i];
        // case 2: i번째 포도주를 마시고 i-1번째 포도주를 마시지 않은 경우 (❔ 🍷 ❌ 🍷)
        int case2 = dp[i-2] + wine[i];
        // case 3: i번째 포도주를 마시지 않는 경우 (❔ ❔ 🍷 ❌)
        int case3 = dp[i-1];
        dp[i] = max(case1, max(case2, case3));
    }

    cout << dp[n] << '\n';
    return (0);
}