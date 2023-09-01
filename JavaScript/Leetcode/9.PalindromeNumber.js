// PROBLEM

// Given an integer x, return true if x is a 
//palindrome , and false otherwise.

var isPalindrome = function(x) {
    let inverseNumber = parseInt(x.toString().split("").reverse().join(""))
    return x === inverseNumber ? true : false;  
};

// test
let result = isPalindrome(121);