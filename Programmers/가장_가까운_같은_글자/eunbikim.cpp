#include <string>
#include <vector>

using namespace std;

vector<int> solution(string s) {
    vector<int> check(26, -1);
    vector<int> answer;
    for (int i = 0; i < s.length(); i++) {
        if (check[s[i] - 'a'] == -1) answer.push_back(-1);
        else answer.push_back(i - check[s[i] - 'a']);
        check[s[i] - 'a'] = i;
    }
    return answer;
}
