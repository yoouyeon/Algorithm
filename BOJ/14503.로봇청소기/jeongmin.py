# 풀이1. 재귀함수로 DFS처럼 풀이

def cleaning(x, y, d):
    global ans, room

    # 로봇청소기 이동 방향 : [서, 남, 동, 북] 순서
    dx, dy = (0, 1, 0, -1), (-1, 0, 1, 0)

    # 1. 현재 칸이 아직 청소되지 않은 경우, 현재 칸을 청소
    if room[x][y] == '0':
        room[x][y] = '2'
        ans += 1

    # 2. 현재 칸의 주변 4칸 중 청소되지 않은 빈 칸이 있는지 확인
    for _ in range(4):
        d = (d + 1) % 4
        nx, ny = x + dx[d], y + dy[d]
        # 청소되지 않은 빈칸인 경우 그 칸으로 재귀함수 호출
        if room[nx][ny] == '0':
            if cleaning(nx, ny, d) == -1:
                return -1

    # 3. 주변 칸에 청소되지 않은 빈칸이 없는 경우 후진이 가능한 지 확인
    nx, ny = x + dx[(d + 2) % 4], y + dy[(d + 2) % 4]
    if room[nx][ny] == '1':
        return -1

    return cleaning(nx, ny, d)



N, M = map(int, input().split())
r, c, d = map(int, input().split())
room = [list(input().split()) for _ in range(N)]
ans = 0
cleaning(r, c, abs(3 - d))
print(ans)
