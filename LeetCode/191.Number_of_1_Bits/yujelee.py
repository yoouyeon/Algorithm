class Solution:
    def hammingWeight(self, n: int) -> int:
        s = str(bin(n))

        return s[2:].count('1')

class Solution:
    def hammingWeight(self, n: int) -> int:
        return bin(n)[2:].count('1')