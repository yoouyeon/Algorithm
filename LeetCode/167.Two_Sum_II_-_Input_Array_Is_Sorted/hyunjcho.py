class Solution:
    def twoSum(self, numbers: list[int], target: int) -> list[int]:
        i, j = 0, len(numbers) - 1
        while i < j:
            tmp = numbers[i] + numbers[j]
            if tmp == target:
                return [i + 1, j + 1]
            if tmp > target:
                j -= 1
            else:
                i += 1