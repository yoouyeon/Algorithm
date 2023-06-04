#include <string>
#include <vector>

using namespace std;

string solution(int a, int b) {
    vector<int> monthly = {0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
    vector<string> week = {"THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"};
    for (int i = 1; i < monthly.size(); i++)
        monthly[i] += monthly[i - 1];
    int day = (monthly[a - 1] + b) % 7;
    return week[day];
}
