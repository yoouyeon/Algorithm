N, X = map(int, input().split())
arr = list(map(int, input().split()))

# visit: X일 동안 들어온 방문자 수를 저장하는 배열
visit = [sum(arr[:X])]
for i in range(X, N):
    visit.append(visit[-1] - arr[i-X] + arr[i])

ans = max(visit)
print(ans, visit.count(ans), end='\n') if ans != 0 else print("SAD")
