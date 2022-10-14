/**
 * Return true if the arrays contain the same elements in any order, else false
 * e.g. ([1, 2], [1, 2]) => true
 * e.g. ([1, 2], [2, 1]) => true
 * e.g. ([1,2], [2,3]) => false
 * @param {(number|string)[]} arr1 
 * @param {(number|string)[]} arr2
 * @returns {boolean}
 */

function arraySameUnordered(arr1, arr2) {
  arr1.sort()
  arr2.sort()

  for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true
}

module.exports = { arraySameUnordered }
