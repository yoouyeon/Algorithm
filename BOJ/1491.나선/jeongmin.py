N, M = map(int, input().split())
pos_x, pos_y = -1, 0 # 시작 위치
move = 1 # 방향

while N and M:
    M -= 1
    pos_x += move * N
    pos_y += move * M
    move *= -1
    N -= 1

print(pos_x, pos_y)