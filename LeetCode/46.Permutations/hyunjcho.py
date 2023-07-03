# 직접 구현
class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        l = len(nums)
        ans = []

        def dfs(tmp, tmp_l):
            if l == tmp_l:
                ans.append(tmp[:])
                return
            for num in nums:
                if num not in tmp:
                    tmp.append(num)
                    dfs(tmp, tmp_l + 1)
                    tmp.pop()

        dfs([], 0)
        return ans
    
# itertools 모듈 활용
class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        return list(itertools.permutations(nums))