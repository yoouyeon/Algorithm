#include <string>
#include <vector>

using namespace std;

vector<string> getEngArr() {
    vector<string> eng;
    eng.push_back("zero");
    eng.push_back("one");
    eng.push_back("two");
    eng.push_back("three");
    eng.push_back("four");
    eng.push_back("five");
    eng.push_back("six");
    eng.push_back("seven");
    eng.push_back("eight");
    eng.push_back("nine");
    return eng;
}

int solution(string s) {
    // vector<string> eng = {"zero", "one", ... , "nine"}; 로 하는 게 훨씬 나았을 듯..
    vector<string> eng = getEngArr();
    for (int i = 0; i < eng.size(); i++) {
        while (s.find(eng[i]) != string::npos)
            s.replace(s.find(eng[i]), eng[i].length(), to_string(i));
    }
    return stol(s);
}
