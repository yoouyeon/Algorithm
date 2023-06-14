import sys
input = sys.stdin.readline


# 압축 가능 여부 확인
# sx, sy: N * N video의 시작 좌표
def is_compressible(sx, sy, N):
    global video

    point = video[sx][sy]
    for i in range(sx, sx + N):
        for j in range(sy, sy + N):
            if point != video[i][j]:
                return False
    return True


def quad_tree(sx, sy, N):
    if is_compressible(sx, sy, N):
        return video[sx][sy]

    N //= 2
    result = quad_tree(sx, sy, N)           # 왼쪽 위
    result += quad_tree(sx, sy + N, N)      # 오른쪽 위
    result += quad_tree(sx + N, sy, N)      # 왼쪽 아래
    result += quad_tree(sx + N, sy + N, N)  # 오른쪽 아래

    return "(" + result + ")"



N = int(input())
video = [input().rstrip() for _ in range(N)]
print(quad_tree(0, 0, N))
