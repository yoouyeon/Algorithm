class Solution:
    def letterCombinations(self, digits: str) -> list[str]:
        l = len(digits)
        if l == 0:
            return

        ans = []
        words = {"2": ['a','b','c'], "3": ['d','e','f'],
                 "4": ['g','h','i'], "5": ['j','k','l'],
                 "6": ['m','n','o'], "7": ['p','q','r','s'],
                 "8": ['t','u','v'], "9": ['w', 'x', 'y','z']}

        def dfs(i, s):
            if (i == l):
                ans.append(s)
                return
            
            for c in words[digits[i]]:
                dfs(i + 1, s + c)

        dfs(0, "")
        return ans