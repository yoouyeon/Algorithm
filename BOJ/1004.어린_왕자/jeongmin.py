from math import pow, sqrt

# 인자: 원의 중점(cx, cy), 반지름 r, 점(px, py)
# 원 내부에 점이 포함되어 있는지 확인하는 함수
def is_in_circle(cx, cy, r, px, py):
    distance = sqrt(pow(cx - px, 2)+ pow(cy - py, 2))
    if distance < r:
        return True
    return False


T = int(input())
for _ in range(T):
    x1, y1, x2, y2 = map(int, input().split())
    n = int(input())
    cnt = 0
    for _ in range(n):
        cx, cy, r = map(int, input().split())
        if is_in_circle(cx, cy, r, x1, y1) ^ is_in_circle(cx, cy, r, x2, y2):
            cnt += 1
    print(cnt)
