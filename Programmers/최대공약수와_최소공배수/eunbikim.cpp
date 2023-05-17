// int getLCM(int large, int small) {
//     for (int i = 1; i < INT_MAX / large; i++) {
//         if ((large * i) % small == 0)
//             return large * i;
//     }
// }

#include <vector>
#include <cmath>
#include <climits>

using namespace std;

int getGCD(int n, int m) {
    int max = 1;
    if (n > m)
        swap(n, m);
    for (int i = 1; i <= sqrt(n) ; i++) {
        if (n % i == 0) {
            if (m % i == 0 && max < i)
                max = i;
            if (m % (n / i) == 0 && max < (n / i))
                max = n / i;
        } 
    }
    return max;
}

vector<int> solution(int n, int m) {
    vector<int> answer;
    int gcd = getGCD(n, m);
    answer.push_back(gcd);
    answer.push_back(n * m / gcd);
    return answer;
}
