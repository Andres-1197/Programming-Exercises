// PROBLEM

// Given a signed 32-bit integer x, return x with its digits reversed. 
//If reversing x causes the value to go outside the signed 32-bit 
//integer range [-2^31, 2^31 - 1], then return 0.

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let isNegative = x < 0 ? true: false; 
    let arrayNums = x.toString().split("");
    let arrayOrder = [];
    let limitSince = (-2)**31;
    let limitTo = Math.pow(2,31)-1;
    
    for(let i = arrayNums.length; i> 0; i--){
        arrayOrder.push(arrayNums[i-1]);
    }
    let newNum = parseInt(arrayOrder.join(""));
    if(isNegative){
        newNum  *= (-1);
    }
    if(newNum >= limitSince && newNum <= limitTo ){
        return newNum;
    }else{
        return 0;
    }    
};

let nro = reverse(-235);