# 23.05.01

import sys
from collections import defaultdict
input = sys.stdin.readline

N = int(input())
people = defaultdict(bool)
people["ChongChong"] = True # 춤을 추고 있는 상태

for _ in range(N):
    nameA, nameB = input().split()
    if people[nameA] is True or people[nameB] is True:
        people[nameB] = people[nameA] = True

print(list(people.values()).count(True))
