#include <vector>
#include <cmath>
#include <algorithm>
#include <iostream>

using namespace std;

vector<int> getNum(vector<int> nums) {
    vector<int> numbers;
    vector<bool> temp(nums.size(), false);
    for (int i = nums.size() - 3; i < nums.size(); i++)
        temp[i] = true;
    do {
        int sum = 0;
        for (int j = 0; j < nums.size(); j++) {
            if (temp[j] == true)
                sum += nums[j];
        }
        numbers.push_back(sum);
    } while (next_permutation(temp.begin(), temp.end()));
    return numbers;
}

int solution(vector<int> nums) {
    int answer = 0;
    vector<int> numbers = getNum(nums);
    for (auto iter : numbers) {
        int temp = 0;
        for (int i = 1; i <= sqrt(iter); i++) {
            if (iter % i == 0)
                temp++;
        }
        if (temp == 1)
            answer++;
    }
    return answer;
}
