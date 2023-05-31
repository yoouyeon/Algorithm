import sys
input = sys.stdin.readline

def dp(N, M):
    num = [1] * M   # 강 서쪽 1번 사이트는 모든 M 사이트에 다리를 놓을 수 있음
    for i in range(N - 1):    # 반복문을 돌면서 강 서쪽 사이트들의 경우의 수를 구해줌
        prefix = [0]
        # 이때 다음 사이트는 무조건 앞 사이트보다 뒤에 위치한 사이트에 놓아야 하기 때문에 마지막 경우의 수는 제외
        for n in num[:-1]:    
            prefix.append(prefix[-1] + n)
        num = prefix
    return sum(num)


T = int(input())
for _ in range(T):
    N, M = map(int, input().split())
    print(dp(N, M))
