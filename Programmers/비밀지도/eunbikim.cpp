#include <string>
#include <vector>

using namespace std;

vector<bool> convertBinary(int num, int size) {
    vector<bool> ret(size);
    for (int i = size - 1; i >= 0; i--) {
        ret[i] = num % 2;
        num /= 2;
    }
    return ret;
}

vector<string> solution(int n, vector<int> arr1, vector<int> arr2) {
    vector<string> answer;
    vector<bool> cvt1, cvt2;
    for (int i = 0; i < n; i++) {
        string temp = "";
        cvt1 = convertBinary(arr1[i], n);
        cvt2 = convertBinary(arr2[i], n);
        for (int j = 0; j < n; j++) {
            bool isBlank = cvt1[j] == false && cvt2[j] == false;
            temp.push_back(isBlank ? ' ' : '#');
        }
        answer.push_back(temp);
    }
    return answer;
}

