#include <string>

using namespace std;

string solution(string s) {
    int s_len = s.length();
    int index = s_len % 2 == 0 ? s_len / 2 - 1 : s_len / 2;
    int len = s_len % 2 == 0 ? 2 : 1;
    return s.substr(index, len);
}
