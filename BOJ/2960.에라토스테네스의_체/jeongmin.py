# 23.05.02

def order_of_erasing(N):
    sieve = [True] * (N + 1) # 체
    order = [] # 지워지는 순서

    m = int(N ** 0.5) # 마지막 체크 범위 구하기
    for i in range(2, m + 1):
        if sieve[i] is True:
            order.append(i)
            for j in range(i + i, N + 1, i):
                if sieve[j] is True:
                    sieve[j] = False
                    order.append(j)

    # 이후 추가되지 않은 소수들 포함하기
    order.extend([i for i in range(m + 1, N + 1) if sieve[i] is True])
    return order


N, K = map(int, input().split())
print(order_of_erasing(N)[K - 1])