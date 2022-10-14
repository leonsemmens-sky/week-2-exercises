/**
 * Return the number of continguous, increasing subsequences in the given array.
 * e.g. [2, 5, 9, 7, 1, 3, 4, 6, 1, 0, 1] -> 10
 * where the increasing subsequences are [2, 5], [5, 9], [2, 5, 9], [1, 3], [3, 4],
 * [4, 6], [1, 3, 4], [3, 4, 6], [1, 3, 4, 6], [0, 1]
 * @param {number[]} arr 
 * @returns {number}
 */

function stepCount(arr) {
  let continuousIncreasingSubsequenceCount = 0
  for (let i = 0; i < arr.length; i++) {
    let subSequenceCount = 0
    for (let r = 0; r < arr.length - i; r++) {
      if (arr[i + r] < arr[i + r + 1]) {
        subSequenceCount++
      } else break;
    }

    continuousIncreasingSubsequenceCount += subSequenceCount
  }
  return continuousIncreasingSubsequenceCount
}

module.exports = { stepCount }
