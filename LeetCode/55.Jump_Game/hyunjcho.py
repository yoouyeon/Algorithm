class Solution(object):
    def canJump(self, nums):
        idx = 0
        if len(nums) == 1:
            return True
        for n in nums:
            idx = max(n, idx)
            if (idx == 0):
                return False
            idx -= 1
        return True