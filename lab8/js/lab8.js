/*
*Author : Monique Salinas
*Created : 26 October
*License : Public Domain
*/

// create an array of numbers and assign it to a variable.
  var array = [2, 34, 23, 5, 67, 12];
console.log("My array", array);
// Create a named function that will take a single parameter, do a calculation on it (sqrt, sqr, addition, etc), and return the result.
function timesTwo(x){
    var results = x * 2;
    return results
}
timesTwo(3)
6
timesTwo(23)
46
// Test your function with a few different numbers.
console.log("Being multipled by 2", timesTwo);

// Use map on your array using your function as a callback to operate on all the numbers in your array.

array.map(timesTwo);
console.log("Here is a map with a named function");
console.log(array.map(timesTwo));

// Now use a new anonymous function as a callback with map to do some new operation on each of the numbers in your array.

array.map(function(x){
     var results = x ** 3
          return results;
 })
 console.log("Here is a map with an anon function. Anonymous");
 console.log("results");
