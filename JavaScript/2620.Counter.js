// PROBLEM

//Given an integer n, return a counter function. This counter function initially 
//returns n and then returns 1 more than the previous value every subsequent time 
//it is called (n, n + 1, n + 2, etc).

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let currentValue = n;
    return function() {
        return currentValue++;
    };
};

// Test
const n = 5;
const myCounter = createCounter(n);

// Calling to the new fuction
console.log(myCounter());  // return 5
console.log(myCounter());  // return 6
console.log(myCounter());  // return 7
