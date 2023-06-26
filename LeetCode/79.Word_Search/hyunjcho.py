class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        dx = [1, 0, -1, 0]
        dy = [0, 1, 0, -1]
        w, h, l = len(board[0]), len(board), len(word)
        visit = [[0 for _ in range(w)] for _ in range(h)]

        def dfs(cx, cy, c, idx):
            if c != word[idx]:
                return False
            if idx == l - 1:
                return True
            for x, y in zip(dx, dy):
                nx, ny = cx + x, cy + y
                if 0 <= nx and nx < w and 0 <= ny and ny < h and visit[ny][nx] == 0 and idx < l - 1:
                    visit[ny][nx] = 1
                    if (dfs(nx, ny, board[ny][nx], idx + 1)):
                        return True
                    visit[ny][nx] = 0
        
        count = Counter(sum(board, []))
        if count[word[0]] > count[word[-1]]:
            word = word[::-1] 

        for i in range(h):
            for j in range(w):
                if board[i][j] == word[0]:
                    visit[i][j] = 1
                    if (dfs(j, i, board[i][j], 0)):
                        return True
                    visit[i][j] = 0
        return False