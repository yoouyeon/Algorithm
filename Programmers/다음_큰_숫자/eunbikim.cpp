
using namespace std;

int countOne(int n) {
    int one = 0;
    while (n != 0) {
        if (n % 2 == 1)
            one++;
        n /= 2;
    }
    return one;
}

int solution(int n) {
    int answer = n + 1;
    int n_one = countOne(n);
    while (1) {
        if (n_one == countOne(answer))
            break ;
        answer++;
    }
    return answer;
}

// bitset을 사용한 버전

// #include <bitset>

// int solution(int n) {
//     int answer = n + 1;
//     int one_cnt = bitset<20>(n).count();
    
//     while (1) {
//         if (one_cnt == bitset<20>(answer).count())
//             return answer;
//         answer++;
//     }
// }
