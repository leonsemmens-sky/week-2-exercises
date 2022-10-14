/**
 * Return an array that contains el n times
 * e.g. (4, 'hi') => ['hi', 'hi', 'hi', 'hi']
 * @param {number} n 
 * @param {any} el 
 * @returns {any[]}
 */

function copyPaste(n, el) {
  let arr = []
  for (let _ = 0; _ < n; _++) arr.push(el);
  return arr
}

module.exports = { copyPaste }
