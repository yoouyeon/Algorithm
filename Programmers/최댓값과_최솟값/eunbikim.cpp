#include <bits/stdc++.h>

using namespace std;

string solution(string s) {
    vector<int> num;
    string buf;

    istringstream iss(s);
    while (getline(iss, buf, ' ')) num.push_back(stoi(buf));

    int max = *max_element(num.begin(), num.end());
    int min = *min_element(num.begin(), num.end());

    return to_string(min) + " " + to_string(max);
}
