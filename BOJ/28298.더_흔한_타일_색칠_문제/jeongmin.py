import sys
input = sys.stdin.readline
from collections import Counter

N, M, K = map(int, input().split())
pieces = [[[] for _ in range(K)] for _ in range(K)]

for i in range(N):
    tile_row = input().rstrip()
    for j in range(M):
        pieces[i % K][j % K].append(tile_row[j])

total = N * M
result = [[0] * K for _ in range(K)]
for i in range(K):
    for j in range(K):
        ch, cnt = Counter(pieces[i][j]).most_common()[0]
        result[i][j] = ch
        total -= cnt

print(total)
for i in range(N):
    print(''.join(result[i % K]) * (M // K))
