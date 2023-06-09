/**
 * @param {number} n
 * @return {boolean}
 */

const isHappy = function(n) {
  const checkNums = new Map();

  const checkNumber = function(n) {
    if (n === 1) 
      return true;
    const next = String(n).split('').reduce((prev, curr) => prev + Number(curr) ** 2, 0);
    if (checkNums.has(next))
      return false;
    checkNums.set(next);
    return checkNumber(next);
  }
  
  return checkNumber(n);
};
