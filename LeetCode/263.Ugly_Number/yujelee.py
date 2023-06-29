class Solution:
    def isUgly(self, n: int) -> bool:
        if n <= 1 :
            return False if n < 1 else True

        temp = gcd(30, n)
        if temp == 1:
            return False
        
        return self.isUgly(n // temp)
