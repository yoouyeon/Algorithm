class Solution:
    def rob(self, nums: List[int]) -> int:
        l = len(nums)
        if l == 1:
            return nums[0]
        nums[1] = max(nums[0], nums[1])
        for i in range(2, l):
            nums[i] = max(nums[i - 2] + nums[i], nums[i - 1])
        return nums[l - 1]