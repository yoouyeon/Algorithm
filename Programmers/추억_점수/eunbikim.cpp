#include <string>
#include <vector>
#include <map>

using namespace std;

vector<int> solution(vector<string> name, vector<int> yearning, vector<vector<string>> photo) {
    map<string, int> match;
    for (int i = 0; i < name.size(); i++) {
        match.insert(make_pair(name[i], yearning[i]));
    }
    vector<int> answer;
    for (int j = 0; j < photo.size(); j++) {
        int sum = 0;
        for (int k = 0; k < photo[j].size(); k++) {
            auto iter = match.find(photo[j][k]);
            if (iter != match.end())
                sum += match.find(photo[j][k])->second;
        }
        answer.push_back(sum);
    }
    return answer;
}
