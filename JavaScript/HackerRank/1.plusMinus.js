// PROBLEM
//Given an array of integers, calculate the ratios of its elements that are positive, 
//negative, and zero. Print the decimal value of each fraction on a new line with  
//places after the decimal.

//Note: This challenge introduces precision problems. The test cases are scaled to six
// decimal places, though answers with absolute error of up to  are acceptable.

/*
 * Complete the 'plusMinus' function.
 */

function plusMinus(arr) {    
    let countPositive = 0;
    let countNegative = 0;
    let countZero = 0;

    let cantDecimal = 4;

    let elements = arr.length;

    for(let i = 0; i<= elements ; i++){
        if(arr[i] === 0){
            countZero++;
        } else if(arr[i] > 0){
            countPositive++;
        }else if(arr[i] < 0){
            countNegative++;
        }
    }
    console.log((countPositive / elements).toFixed(cantDecimal));
    console.log((countNegative / elements).toFixed(cantDecimal));
    console.log((countZero / elements).toFixed(cantDecimal));
}

var result = plusMinus([-4, 3, -9, 0, 4, 1]);

