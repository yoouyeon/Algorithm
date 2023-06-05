class Solution:
    def isHappy(self, n: int) -> bool:        
        def getSquared(s):
            n = 0
            for c in s:
                n += pow(int(c), 2)
            return n

        arr = []

        while n != 1:
            if n in arr:
                break
            arr.append(n)
            n = getSquared(str(n))

        return n == 1
