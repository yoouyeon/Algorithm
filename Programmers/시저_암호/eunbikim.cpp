#include <string>
#include <cctype>

using namespace std;

string solution(string s, int n) {
    string answer = "";
    int temp;
    for (int i = 0; i < s.length(); i++) {
        temp = s[i];
        if (isupper(temp)) {
            temp += n;
            if (temp > 'Z') temp = 'A' + (temp - 'Z' - 1);
        }
        else if (islower(temp)) {
            temp += n;
            if (temp > 'z') temp = 'a' + (temp - 'z' - 1);
        }
        answer.push_back(temp);
    }
    return answer;
}
