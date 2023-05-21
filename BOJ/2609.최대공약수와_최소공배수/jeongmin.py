# 유클리드 호제법(Euclidean-algorithm)
def euclidean(a, b):
    if a < b:
        a, b = b, a
    while b > 0:
        a, b = b, a % b
    return a

a, b = map(int, input().split())
gcd = euclidean(a, b)
lcm = a * b // gcd
print(gcd)
print(lcm)
