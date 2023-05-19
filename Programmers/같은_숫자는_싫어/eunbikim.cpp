// vector<int> solution(vector<int> arr)
// {
//     int prev = arr.front();
//     vector<int>::iterator iter;
//     for (iter = arr.begin() + 1; iter != arr.end(); iter++) {
// 		   vector의 erase함수는 삭제된 원소를 가리키는 다음 원소의 iterator를 반환
//		   그러므로 현재 iter를 erase 시켜버리면, for문에서는 이미 존재하지 않은 곳을 가리켜 iter++를 해주기 때문에 core dump 발생
//         if (prev == *iter) arr.erase(iter);
//         else prev = *iter;
//     }

//     return arr;
// }

#include <vector>
#include <iostream>

using namespace std;

vector<int> solution(vector<int> arr)
{
    vector<int> answer;
    int prev = arr.front();
    answer.push_back(prev);
    for (vector<int>::iterator iter = arr.begin() + 1;
            iter != arr.end(); iter++) {
        if (prev == *iter) continue;
        answer.push_back(*iter);
        prev = *iter;
    }
    return answer;
}
