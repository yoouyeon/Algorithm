#include <string>
#include <vector>
#include <algorithm>

using namespace std;

int idx;

bool compare(string a, string b) {
    if (a[idx] == b[idx]) {
        int i = 0;
        while (a[i] == b[i]) i++;
        return a[i] < b[i];
    }
    return a[idx] < b[idx];
}

vector<string> solution(vector<string> strings, int n) {
    idx = n;
    sort(strings.begin(), strings.end(), compare);
    return strings;
}
