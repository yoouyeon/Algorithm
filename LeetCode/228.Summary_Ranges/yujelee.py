# Two Point
class Solution:
    def summaryRanges(self, nums: List[int]) -> List[str]:
        arr = []

        l, r = 0, len(nums) - 1

        while l <= r:
            if r - l != nums[r] - nums[l]:
                r = l + (r - l) // 2
                continue
            if r < len(nums) - 1 and nums[r] + 1 == nums[r + 1]:
                r += 1
                continue
            arr.append((str(nums[l]) + "->" + str(nums[r])) if l != r else str(nums[l]))
            l, r = r + 1, len(nums) - 1

        return arr

# Sequential Search
class Solution:
    def summaryRanges(self, nums: List[int]) -> List[str]:
        arr = []

        l, r = 0, 0

        while r < len(nums):
            if r != len(nums) - 1 and nums[r] + 1 == nums[r + 1]:
                r += 1
                continue
            if l == r:
                arr.append(str(nums[l]))
            else :
                arr.append(str(nums[l]) + "->" + str(nums[r]))
            l, r = r + 1, r + 1

        return arr