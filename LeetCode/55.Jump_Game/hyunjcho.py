class Solution(object):
    def canJump(self, nums):
        idx = 0
        for n in nums:
            if idx < 0:
                return False
            idx = max(n, idx)
            idx -= 1
        return True