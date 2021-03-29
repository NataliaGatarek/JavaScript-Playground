console.log("Starting javascript");
var MyName = "Natalia";
console.log("Natalia");
var Age =32;
console.log(33);
var juliaAge = 32;
var ageDiff = function age () {return(Age - juliaAge); }
console.log(ageDiff());
if (Age > 21) {
    console.log("you are older than 21");
} if (Age < 21) {
    console.log("you are younger than 21");
}

if (juliaAge < Age) {
    console.log("Julia is younger than you");
} else if (juliaAge > Age) {
    console.log("Julia is older than you");
} if (juliaAge == Age)  {
    console.log("You have the same age as Julia");
}
var names = ["Natalia", "Moe", "Laura", "Oded", "Ottavia", "Chirag", "Denis", "Lucas"];
names.sort();
console.log(names[0]);
console.log(names[names.length - 1]);
for (var index = 0; index < names.length; index++) {
    //console.log(index);//
    console.log(names[index]);
}

var ages = [33, 30, 29, 32, 28, 35, 31, 38];
var j = 0;
while (j < ages.length) {
    console.log(ages[j]);
    j++;
}
for (var index = 0; index < ages.length; index++){
    if (ages [index] % 2 == 0)
    console.log(ages[index]);
}
//while (j < ages.length) {
    //if (ages [j] % 2 == 0)
    //console.log(ages[j]);
   // j++;
//}

var numbers = [33, 30, 29, 32, 28, 35, 31, 38, 56,3,33, 75, 21, 90, 7];
lowNumber(numbers);
function lowNumber (inputArray) {
    console.log(Math.min.apply(null, inputArray));
}

//function low(lowNumber) {
    //console.log(Math.min.apply(lowNumber));
//}
//low();

var numbers = [33, 30, 29, 32, 28, 35, 31, 38, 56,3,33, 75, 21, 90, 7];
maxNumber(numbers);
function maxNumber (inputArray) {
    console.log(Math.max.apply(null, inputArray));
}
printIndex(numbers, 6);
function printIndex(inputArray, index) {
    console.log(inputArray[index]);
}
printIndex(numbers, 10);
function printIndex(inputArray, index) {
    console.log(inputArray[index]);
}
   
//var array = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
//function duplicateArray(array) {
    //var results = [];
    //array.forEach(funcion(element, index)) 
       // if (array.indexOf(element, index + 1) > -1) {
           // if (results.indexOf(element) === -1) {
            //    results.push(element);
           // }
    //}
    //console.log(results);
   // }

duplicateArray(numbers);

function duplicateArray(inputArray) {
  var duplicates = [];
  inputArray.forEach(function(element, index) {
    if (inputArray.indexOf(element, index + 1) > -1) {
      if (duplicates.indexOf(element) === -1) {
        duplicates.push(element);
     }
    }
  });
  console.log(duplicates);
}

var myColor = ["Red", "Green", "White", "Black"];
var newColor = myColor.join(",");
console.log(newColor);

var reverse = "1358630";
function reverseNumber(reverse) {
  return (
    parseFloat(
      reverse
        .toString()
        .split('')
        .reverse()
        .join('')
    )
    )
}
 console.log(reverseNumber(reverse));
    
var x = "dog";
function alpOrder(x) {
    return (
        x
            .toString()
            .split('')
            .sort()
        .join('')
    )
}
console.log(alpOrder(x));

var txt = "spanish water dog";
function toUpper(txt) {
    return txt 
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
console.log(toUpper(txt));

var y = "spanish water dog is my favourite dog breed";

//function LongestWord(y) {
   // return y
    //.split(' ')
    //.sort(function(a, b) { return a.length-b.length; }) 
    //.pop().length;
//}
//console.log(LongestWord(y));

function longestWord(y) {
    var sortedWord = y.split(' ')
                        .sort((wordA, wordB) => wordB.length - wordA.length)
    return sortedWord[0]
}

var names = ['Post Malone', 'Die Antwoord', 'Still Corners' ];
var ul = document.getElementById("band-list");

for (var i = 0; i < names.length; i++) {
    var name = names[i];
    var li = document.createElement('li');
     li.innerHTML = name;  
    document.getElementById("band-list").appendChild(li);
}

var h = 5;
function zero () {
    var multiply = h * h;
   console.log("zero =" + " " + multiply);
}

var f = 6;
var g = 6;
var multiplication = function one () {return(f*g); }
console.log(multiplication());

var k = 2;
var l = 3;
var m = 4;
function two (k, l, m){
    return k * l*m;
}
var multip=two(k, l,m);
console.log(multip);


var test = sides => {
  if (sides.every(el => el > 0)) {
    const size = new Set(sides).size
    if (size === 1) console.log("equilateral triangle")
    else if (size === 2) console.log("isosceles triangle")
    else console.log("scalene triangle")
  } else {
    console.log("invalid")
  }
}
 
var a = 5;
var b = 5;
var c = 5;
function triangle(a,b,c){ 
if ((a > 0 && b >0 && c >0 ) && (a == b && b == c && c == a)){
  console.log("equilateral triangle")
}
if ((a > 0 && b >0 && c >0 ) && (a == b || b == c || c == a)){
  console.log("isosceles triangle")
}
   }     
    
const getSide = l => Number(prompt(`Please input the the second side (${l})`))
const sides = [getSide('a'), getSide('b'), getSide('c')]

if (sides.every(el => el > 0)) {
  const size = new Set(sides).size
  if (size === 1) console.log("equilateral triangle")
  else if (size === 2) console.log("isosceles triangle")
  else console.log("scalene triangle")
} else {
  console.log("invalid")
}