/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */
 var numberToString = function(n){
  return n.toString();
}
numberToString(5);

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

var increase = function(n){

  return n+=1;
}
increase(2);
/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
var decrease = function(n){
  return n -=1;
}
decrease(4);


/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */

 var add = function(x,y){
  return x + y;
}
add(5,4);


/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
var subtract = function(x,y){
  return x - y;
}
subtract(5,4);
/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */
var multiply = function(x,y){
  return x * y;
}
multiply(5,5);
/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
var divide = function(x,y){
  return x / y;
}
divide(20,5);
/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */
var square = function(x) {
  return x * x;
}
square(5);
/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */
var calculate = function(operation, x, y){
  var result;
  console.log("hello");
  switch(operation) {
    case "add":
    result = x + y;
      console.log(x + " + " + y + " = " + result);
      return x + y;
    case "subtract":
    result = x - y;
      console.log(x + " - " + y + " = " + result);
      return x - y;
    case "multiply":
    result = x * y;
      console.log(x + " * " + y + " = " + result);
      return x * y;
    case "divide":
    result = x / y;
      console.log(x + " / " + y + " = " + result);
      return x / y;
    default:
      return null;
   }
}

calculate("add", 5, 5);

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */

var isGreaterThan = function(a,b){
  if(a > b){
    return true;
  }
  else{
    return false;
  }
}
isGreaterThan(6,2);

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
var isLessThan = function(a,b){
  if(a < b){
    return true;
  }
  else{
    return false;
  }
}
isLessThan(5,10);

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */
var areEqual = function(a,b){
  if(a === b){
    return true;
  }
  else{
    return false;
  }
}
areEqual(5,5);
/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */
var minimum = function(x,y){
  return Math.min(x,y);
}
minimum(2,4);
/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */
var maximum = function(x,y){
  return Math.max(x,y);
}

maximum(10,4);

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */


/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */


/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */


/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */


/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */


/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */

