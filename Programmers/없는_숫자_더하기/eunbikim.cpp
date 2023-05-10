#include <vector>

using namespace std;

int solution(vector<int> numbers) {
    int answer = 0;
    int check[10] = {0};
    for (int i = 0; i < numbers.size(); i++)
        check[numbers[i]] = 1;
    for (int j = 0; j < 10; j++) {
        if (check[j] == 0)
            answer += j;
    }
    return answer;
}
