board = input().split(".")

for i, piece in enumerate(board):
    cnt = piece.count('X')
    if cnt % 2 == 1:
        board = ["-1"]
        break
    board[i] = "AAAA" * (cnt // 4) + "BB" * (cnt % 4 // 2)

print('.'.join(board))
