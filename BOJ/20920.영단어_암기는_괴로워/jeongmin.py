import sys
from collections import Counter
input = sys.stdin.readline


N, M = map(int, input().split())
vocabulary = []

for _ in range(N):
    word = input().rstrip()
    if M <= len(word):
        vocabulary.append(word)
        
cnt = Counter(vocabulary)
print(*sorted(cnt.keys(), key=lambda x: (-cnt[x], -len(x), x)), sep='\n')
