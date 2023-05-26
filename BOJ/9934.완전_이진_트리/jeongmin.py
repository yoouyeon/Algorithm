from collections import deque


def levelorder(K, num):
    print_height = K
    queue = deque([(K, num)])
    while queue:
        height, tree = queue.popleft()
        if not tree:
            continue
        if print_height != height:
            print_height = height
            print()
        root = (2 ** height - 2) // 2
        print(tree[root], end=' ')
        if height != 1:
            queue.append((height - 1, tree[:root]))
            queue.append((height - 1, tree[root + 1:]))


K = int(input())
num = list(map(int, input().split()))
levelorder(K, num)
