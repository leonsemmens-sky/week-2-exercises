/**
 * Coerce each element to a number if possible, otherwise remove the element
 * e.g. ([1, '2', 'three', false, [5]]) => [1, 2, 0]
 * @param {any[]} arr 
 * @returns {any[]}
 */

function cleanUp(arr) {
  return arr.reduce((newArr, value) => {
    let num = Number(value)
    if (!isNaN(num)) {
      newArr.push(num)
    }
    return newArr
  }, [])
}

module.exports = { cleanUp }
