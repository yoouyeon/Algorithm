# 풀이 1
X = int(input())
bar = 64
cnt = 0
while X:
    while X < bar:
        bar //= 2
    X -= bar
    cnt += 1

print(cnt)

# 풀이 2
# print(bin(int(input())).count('1'))
