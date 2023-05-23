#include <vector>
#include <algorithm>

using namespace std;

int solution(vector<vector<int>> sizes) {
    int w_max = 0;
    int h_max = 0;
    for (int i = 0; i < sizes.size(); i++) {
        if (sizes[i][0] > sizes[i][1])
            swap(sizes[i][0], sizes[i][1]);
        if (sizes[i][0] >= w_max)
            w_max = sizes[i][0];
        if (sizes[i][1] >= h_max)
            h_max = sizes[i][1];
    }
    return h_max * w_max;
}
