const PAIR = {
  ')': '(',
  '}': '{',
  ']': '['
};

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
  if (s.length % 2 !== 0)
    return false;
  if (Object.keys(PAIR).includes(s[0]))
    return false;

  const arr = s.split('');
  for(let i = 0; i < arr.length; i++) {
    if (Object.keys(PAIR).includes(arr[i])) {
      if (PAIR[arr[i]] !== arr[i - 1]) {
        return false;
      } else {
        arr.splice(i - 1, 2);
        i = i - 2;
      }
    }
  }
  if (arr.length > 0)
    return false;
  return true;
};
