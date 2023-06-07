def recursive(N):
    if N == 3:
        return ["***", "* *", "***"]
    size = N // 3
    pattern = recursive(size)
    new = []
    for i in range(N):
        if i // size == 1:          # 공백이 추가되어야 하는 라인
            new.append(pattern[i % size] + ' ' * size + pattern[i % size])
        else:                       # 공백이 필요없는 라인
            new.append(pattern[i % size] * 3)
    return new


N = int(input())
print(*recursive(N), sep='\n')
