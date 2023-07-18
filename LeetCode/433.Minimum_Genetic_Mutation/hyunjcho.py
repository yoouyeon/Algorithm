class Solution:
    def minMutation(self, startGene: str, endGene: str, bank: List[str]) -> int:
        if endGene not in bank:
            return -1
        if startGene == endGene:
            return 0
        
        def check_diff(str1, str2):
            diff = 0
            for i in range(len(str1)):
                if str1[i] != str2[i]:
                    diff += 1
                if diff > 1:
                    return False
            return True

        q = [[startGene, 0]]
        visit = set()

        while q:
            cur, ans = q.pop(0)
            if cur == endGene:
                return ans
            for g in bank:
                if g not in visit and check_diff(cur, g) == True:
                    q.append([g, ans + 1])
                    visit.add(g)
        return -1