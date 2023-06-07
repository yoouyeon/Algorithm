#include <vector>
#include <algorithm>

using namespace std;

vector<int> getWinner(int one, int two, int three) {
    vector<int> cnt = {one, two, three};
	vector<int> sorted = {one, two, three};
    vector<int> answer;
    sort(sorted.begin(), sorted.end(), greater<> ());
	for (int i = 0; i < cnt.size(); i++) {
		if (sorted[0] == cnt[i])
			answer.push_back(i + 1);
	}
    return answer;
}

vector<int> solution(vector<int> answers) {
    vector<int> one = {1, 2, 3, 4, 5};
    vector<int> two = {2, 1, 2, 3, 2, 4, 2, 5};
    vector<int> three = {3, 3, 1, 1, 2, 2, 4, 4, 5, 5};
    int cnt1, cnt2, cnt3;
    cnt1 = cnt2 = cnt3 = 0;
    for (int a = 0; a < answers.size(); a++) {
        if (answers[a] == one[a % one.size()]) cnt1++;
        if (answers[a] == two[a % two.size()]) cnt2++;
        if (answers[a] == three[a % three.size()]) cnt3++;
    }
    return getWinner(cnt1, cnt2, cnt3);
}

// 처음 코드...........

// vector<int> getWinner(int one, int two, int three) {
//     vector<int> cnt = {one, two, three};
//     vector<int> answer;
//     sort(cnt.begin(), cnt.end(), greater<> ());
//     if (cnt[2] != cnt[1]) {
//         cnt.pop_back();
//         if (cnt[1] != cnt[0])
//             cnt.pop_back();
//     }
//     else if (cnt[2] == cnt[1] && cnt[1] < cnt[0]) {
//         cnt.pop_back();
//         cnt.pop_back();
//     }
//     for (int i = 0; i < cnt.size(); i++) {
//         if (find(answer.begin(), answer.end(), 1) == answer.end() &&cnt[i] == one)
//             answer.push_back(1);
//         else if (find(answer.begin(), answer.end(), 2) == answer.end() && cnt[i] == two)
//             answer.push_back(2);
//         else if (find(answer.begin(), answer.end(), 3) == answer.end() && cnt[i] == three)
//             answer.push_back(3);
//     }
//     sort(answer.begin(), answer.end());
//     return answer;
// }

// vector<int> solution(vector<int> answers) {
//     vector<int> one = {1, 2, 3, 4, 5};
//     vector<int> two = {2, 1, 2, 3, 2, 4, 2, 5};
//     vector<int> three = {3, 3, 1, 1, 2, 2, 4, 4, 5, 5};
//     int cnt1, cnt2, cnt3;
//     int i, j, k;
//     cnt1 = cnt2 = cnt3 = i = j = k = 0;
//     for (int a = 0; a < answers.size(); a++) {
//         int iter = answers[a];
//         if (iter == one[i]) cnt1++;
//         i++;
//         if (i == one.size())
//             i = 0;
//         if (iter == two[j]) cnt2++;
//         j++;
//         if (j == two.size())
//             j = 0;
//         if (iter == three[k]) cnt3++;
//         k++;
//         if (k == three.size())
//             k = 0;
//     }
//     return getWinner(cnt1, cnt2, cnt3);
// }
