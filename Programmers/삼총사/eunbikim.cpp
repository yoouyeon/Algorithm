#include <vector>
#include <algorithm>

using namespace std;

int solution(vector<int> number) {
    int answer = 0;
    vector<int> temp(number.size(), 1);
    for (int i = 0; i < number.size() - 3; i++)
        temp[i] = 0;
    sort(number.begin(), number.end());
    do {
        int sum = 0;
        for (int j = 0; j < number.size(); j++) {
            if (temp[j])
                sum += number[j];
        }
        if (sum == 0)
            answer++;
    } while (next_permutation(temp.begin(), temp.end()));
    return answer;
}
