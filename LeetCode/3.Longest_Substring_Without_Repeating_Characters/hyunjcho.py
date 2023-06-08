class Solution(object):
    def lengthOfLongestSubstring(self, s):
        ret = 0
        tmp = []
        for c in s:
            if c in tmp:
                tmp = tmp[tmp.index(c) + 1:]
            tmp.append(c)
            ret = max(ret, len(tmp))
        return ret