#include <vector>
#include <algorithm>

using namespace std;

int solution(vector<int> d, int budget) {
    int answer = 0;
    sort(d.begin(), d.end());
    if (d[answer] > budget)
        return answer;
    for (answer = 1; answer < d.size(); answer++) {
        d[answer] += d[answer - 1];
        if (d[answer] > budget)
            break;
    }
    return answer;
}
