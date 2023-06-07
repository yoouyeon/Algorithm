#include <vector>
using namespace std;

bool check[200000];

int solution(vector<int> nums)
{
    int cnt = 0;
    for (int i = 0; i < nums.size(); i++) {
        if (check[nums[i]] == false) {
            check[nums[i]] = true;
            cnt++;
        }
    }
    return nums.size() / 2 < cnt ? nums.size() / 2 : cnt;
}
