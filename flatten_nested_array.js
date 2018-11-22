/**
 * Shahab Younas 
 */

 // Given a nested Array or Arrays  
 // Flatten Array using reduce and concat

 // Write a function which receive array and a function to manipulate array
 let flattenArray = (array, concat) =>  array.reduce(concat);

// Given input array array 
 let arrays = [[1, 2, 3], [4, 5], [6]]; 

// concat method passed to flattenArray function
let concat = (acc,val) => acc.concat(val);

// Stores the flatten Array in result
let result = flattenArray(arrays, concat);

// You may display the result. 
//console.log(result)

// Resultant Array is [1,2,3,4,5,6]


 
 