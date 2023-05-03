from collections import deque

def get_clock_num(card):
    case = set()
    queue = deque(card)
    for i in range(4):
        case.add(int(''.join(queue)))
        queue.rotate()

    return min(case)

input_card = get_clock_num(list(input().split()))
cnt = 1

for i in range(1111, input_card):
    if get_clock_num(list(str(i))) == i:
        cnt += 1

print(cnt)