from itertools import permutations

def func(arr):
    global N
    result = 0
    for i in range(N - 1):
        result += abs(arr[i] - arr[i + 1])
    return result


N = int(input())
A = list(map(int, input().split()))
print(max(map(func, permutations(A, N))))
