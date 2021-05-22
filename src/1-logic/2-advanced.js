/**
 * Used to get a absolute value of a number.
 * @param {number} number 
 * @returns -> Number or String
 */
function getAbsoluteValueOfANumber(number) {
    if (number != null) {
      if (number < 0) {
        return `(${Math.abs(number)})`
      } else {
        return number.toString()
      }
    }
  }
  
  console.log(getAbsoluteValueOfANumber(undefined))
  console.log(getAbsoluteValueOfANumber(0))
  console.log(getAbsoluteValueOfANumber(10))
  console.log(getAbsoluteValueOfANumber(-5))