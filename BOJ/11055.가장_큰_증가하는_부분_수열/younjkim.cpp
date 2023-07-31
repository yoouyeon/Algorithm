#include <iostream>
#include <vector>
using namespace std;

int main()
{
	int N;
	cin >> N;

	int Ai;
	vector<int> A;
	for (int i = 0; i < N; i++)
	{
		cin >> Ai;
		A.push_back(Ai);
	}

	int max = 0;
	vector<int> DP(A);

	for (int i = 0; i < N; i++)
	{
		DP[i] = A[i];
		for (int j = 0; j < i; j++)
		{
			if (A[j] < A[i] && DP[i] < DP[j] + A[i])
			{
				DP[i] = DP[j] + A[i];
			}
		}
		if (max < DP[i]) max = DP[i];
	}

	cout << max << endl;

	return 0;
}