// PROBLEM

//Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

//The returned array should be created such that returnedArray[i] = fn(arr[i], i).

//Please solve it without the built-in Array.map method.

var map = function(arr, fn) {
    if(0 < arr.length < 1001 ){
        var miArray = arr;  
        for (var i = 0; i < arr.length; i++) {
            miArray[i] = fn(arr[i],i);
        }
        return miArray;
    }
     return [];
};