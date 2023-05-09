// Lab 8: Anon Functions and Callbacks
// Author:  Jordan Wilson
// Date: 4 May 2023


function isEven(x){
  return (x % 2 == 0); 
}
// test function
console.log("Is 1 even? ", isEven(1));
console.log("Is 2 even? ", isEven(2));

array = [100, 81, 4, 16, 42, 69, 2020]
console.log("My array", array);

var result = array.map(isEven);
// should return [true, fale, true, true, true, false, true]
console.log("Test of evenness of arrays:", result);

var result = array.map(function(x){
  return x ** 0.5;
})
//should return 10, 9, 2, 4, 6.48074069840786, 8.306623862918075, 44.94441010848846]
console.log("Squareroot of array:", result);





