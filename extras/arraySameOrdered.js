/**
 * Return true if the arrays contain the same elements in the same order, else false
 * e.g. ([1, 2], [1, 2]) => true
 * e.g. ([1, 2], [2, 1]) => false
 * e.g. ([1,2], [2,3]) => false
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {any[]}
 */

function arraySameOrdered(arr1, arr2) {
  for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true
}

module.exports = { arraySameOrdered };
