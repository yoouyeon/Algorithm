#include <string>
#include <vector>
#include <map>

using namespace std;

vector<int> solution(int N, vector<int> stages) {
    vector<int> answer;
    vector<int> stop(N + 2, 0);
    vector<int> reach(N + 2, 0);
    multimap<double, int, greater<double>> ratio;
    for (auto i : stages) {
        for (int j = 1; j <= i; j++)
            reach[j]++;
        stop[i]++;
    }
    for (int i = 1; i <= N; i++)
        ratio.insert({stop[i] / (double)reach[i], i});
    for (auto stage : ratio)
        answer.push_back(stage.second);
    return answer;
}
