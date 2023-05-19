#include <string>
#include <vector>
#include <cmath>

using namespace std;

int convertFunc(int num, int base) {
    vector<int> convert;
    // 3진법 변환
    while (num != 0) {
        convert.push_back(num % base);
        num /= base;
    }
    int ret = 0;
    int i = 0;
    // 10진법 변환
    while (!convert.empty()) {
        ret += convert.back() * pow(base, i++);
        convert.pop_back();
    }
    return ret;
}

int solution(int n) {
    return convertFunc(n, 3);
}
