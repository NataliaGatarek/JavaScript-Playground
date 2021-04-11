
//mergin two arrays
var one = [1, 2, 3, 4];
var two = [3, 4, 5, 6, 7];
var merged = [...one, ...two];
console.log(merged);

//max from two arrays
var tree = [5, 6, 7, 8];
var four = [7, 8, 9, 10];
Math.max(...tree, ...four);

//reverse number
const reversedNum = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)

//to upper case wszystkie
var txt = "spanish water dog";
console.log(txt.toUpperCase());