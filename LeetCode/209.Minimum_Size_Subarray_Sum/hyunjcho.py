class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        if sum(nums) < target:
            return 0
        
        tmp, left, ans = 0, 0, len(nums)

        for right, n in enumerate(nums):
            tmp += n
            while tmp >= target:
                tmp -= nums[left]
                ans = min(ans, right - left + 1)
                left += 1
                
        return ans