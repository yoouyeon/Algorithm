from collections import Counter

N = int(input())
book = sorted([input() for _ in range(N)])
print(Counter(book).most_common(1)[0][0])
