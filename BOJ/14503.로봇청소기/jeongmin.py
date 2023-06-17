# 풀이2. 반복문을 통해 이후 방문할 칸으로 이동

def cleaning(x, y, d):
    global room

    # 로봇청소기 이동 방향 : [서, 남, 동, 북] 순서
    dx, dy = (0, 1, 0, -1), (-1, 0, 1, 0)
    ans = 0

    while room[x][y] != '1':

        # 1. 현재 칸이 아직 청소되지 않은 경우, 현재 칸을 청소
        if room[x][y] == '0':
            room[x][y] = '2'
            ans += 1

        # 2. 현재 칸의 주변 4칸 중 청소되지 않은 빈 칸이 있는지 확인
        for _ in range(4):
            d = (d + 1) % 4
            nx, ny = x + dx[d], y + dy[d]
            if room[nx][ny] == '0':
                x, y = nx, ny
                break
                
         # 3. 주변 칸에 청소되지 않은 빈칸이 없는 경우 후진
         if (x, y) != (nx, ny):
            x, y = x + dx[(d + 2) % 4], y + dy[(d + 2) % 4]
        
    return ans
    

N, M = map(int, input().split())
r, c, d = map(int, input().split())
room = [list(input().split()) for _ in range(N)]
print(cleaning(r, c, abs(3 - d)))
