#include <string>
#include <vector>
#include <algorithm>

using namespace std;

vector<int> solution(vector<int> arr) {
    vector<int>::iterator min = min_element(arr.begin(), arr.end());
    arr.erase(min);
    if(arr.size() == 0)
        arr.push_back(-1);
    return arr;
}
