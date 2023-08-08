class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        if target not in nums:
            return [-1, -1]
        l = len(nums) - 1

        left, right = 0, l
        start, end = -1, -1
        while left <= right:
            mid = (left + right) // 2
            if nums[mid] >= target:
                start = mid
                right = mid - 1
            else:
                left = mid + 1

        end = start
        left = start + 1
        right = l
        while left <= right:
            mid = (left + right) // 2
            if nums[mid] <= target:
                end = mid
                left = mid + 1
            else:
                right = mid - 1

        return [start, end]