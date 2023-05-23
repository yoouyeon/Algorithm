class Solution:
    def addDigits(self, num: int) -> int:

            while 10 <= num:
                        s = str(num)
                                    num = 0
                                                for c in s:
                                                                num += int(c)

                                                                                return num


