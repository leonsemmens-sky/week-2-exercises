/**
 * Rotate the input array to the left by r and return
 * When r < 0, rotate the other way; when r = 0 do nothing
 * e.g. ([1, 2, 3, 4, 5], 2) => [3, 4, 5, 1, 2]
 * e.g. ([1, 2, 3, 4, 5], -2) => [4, 5, 1, 2, 3]
 * @param {any[]} arr 
 * @param {number} r
 * @returns {any[]}
 */

function rotate(arr, r) {
  return arr.reduce((rotated, val, i) => {
    let newI = i - r
    newI += newI < 0 ? arr.length : (newI > arr.length - 1 ? -arr.length : 0)
    rotated[newI] = val
    return rotated
  }, [])
}

module.exports = { rotate }
