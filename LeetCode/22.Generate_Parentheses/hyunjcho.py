class Solution:
    def generateParenthesis(self, n: int) -> list[str]:
        ans = []
        
        def dfs(left, right, s):
            if len(s) == n * 2:
                ans.append(s)
                return
            if left < n:
                dfs(left + 1, right, s + "(")
            if left > right:
                dfs(left, right + 1, s + ")")
        
        dfs(0, 0, "")
        return ans