class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        ans = []
        l = len(candidates)

        def dfs(i, s, tmp):
                if s == target:
                    ans.append(tmp)
                    return
                if s > target or i == l:
                    return
                if target - s < candidates[i]:
                    return
                tmp.append(candidates[i])
                dfs(i, s + candidates[i], tmp.copy())
                tmp.pop()
                dfs(i + 1, s, tmp.copy())

        candidates.sort()
        dfs(0, 0, [])

        return ans