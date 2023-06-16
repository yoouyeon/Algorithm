class Solution:
    def intToRoman(self, num: int) -> str:
        one = ["", "I", "X", "C", "M"]
        five = ["", "V", "L", "D"]
        ans = ""
        for i, c in enumerate(str(num)):
            digit = len(str(num)) - i
            n = int(c)
            if n < 4 or (n > 4 and n < 9):
                if n > 4:
                    ans += five[digit]
                for j in range(n % 5):
                    ans += one[digit]
            elif n == 4:
                ans += one[digit]
                ans += five[digit]
            elif n == 9:
                ans += one[digit]
                ans += one[digit + 1]
        return ans