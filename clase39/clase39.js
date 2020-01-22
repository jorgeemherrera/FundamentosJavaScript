/**
 * !6 = 6 * 5 * 4 * 3 * 2 * 1
 * @param {*} n 
 */

function factorial(n) {
  if (!this.cache) {
    this.cache = {}
  }
  debugger
  if (this.cache[n]) {
    return this.cache[n]
  }

  if (n === 1) {
    return 1
  }

  this.cache[n] =  n * factorial(n - 1)
  debugger
  return this.cache[n]
}