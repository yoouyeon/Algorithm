string = input()
bomb = list(input())
bomb_size = len(bomb)
stack = []

for i in range(len(string)):
    stack.append(string[i])
    if bomb_size <= len(stack) and stack[-bomb_size:] == bomb:
        for _ in range(bomb_size):
            stack.pop()

print(''.join(stack)) if stack else print("FRULA")
