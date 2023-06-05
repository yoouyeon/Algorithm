class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        m = dict()

        for c1, c2 in zip(s, t):
            if c1 not in m:
                if c2 in m.values():
                    return False
                m[c1] = c2
        
        result = ""

        for c in s:
            result += m[c]
        
        return True if result == t else False

