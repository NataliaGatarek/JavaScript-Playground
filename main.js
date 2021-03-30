//1
console.log("Starting javascript");
var MyName = "Natalia";
console.log("Natalia");
//2
var Age =32;
console.log(33);
//3
var juliaAge = 32;
var ageDiff = function age () {return(Age - juliaAge); }
console.log(ageDiff());
//4
if (Age > 21) {
    console.log("you are older than 21");
} if (Age < 21) {
    console.log("you are younger than 21");
}

//5
if (juliaAge < Age) {
    console.log("Julia is younger than you");
} else if (juliaAge > Age) {
    console.log("Julia is older than you");
} if (juliaAge == Age)  {
    console.log("You have the same age as Julia");
}

//1
var names = ["Natalia", "Moe", "Laura", "Oded", "Ottavia", "Chirag", "Denis", "Lucas"];
names.sort();
console.log(names[0]);
console.log(names[names.length - 1]);
for (var index = 0; index < names.length; index++) {
    //console.log(index);//
    console.log(names[index]);
}

//2
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
//3
var numbers = [33, 30, 29, 32, 28, 35, 31, 38, 56,3,33, 75, 21, 90, 7];
lowNumber(numbers);
function lowNumber (inputArray) {
    console.log(Math.min.apply(null, inputArray));
}

//function low(lowNumber) {
    //console.log(Math.min.apply(lowNumber));
//}
//low();

//4
var numbers = [33, 30, 29, 32, 28, 35, 31, 38, 56,3,33, 75, 21, 90, 7];
maxNumber(numbers);
function maxNumber (inputArray) {
    console.log(Math.max.apply(null, inputArray));
}

//5
printIndex(numbers, 6);
function printIndex(inputArray, index) {
    console.log(inputArray[index]);
}
printIndex(numbers, 10);
function printIndex(inputArray, index) {
    console.log(inputArray[index]);
}
 
//6
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

//7
var myColor = ["Red", "Green", "White", "Black"];
var newColor = myColor.join(",");
console.log(newColor);

//1
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
    
//2
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

//3
var txt = "spanish water dog";
function toUpper(txt) {
    return txt 
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
console.log(toUpper(txt));

//4
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
//1
var names = ['Post Malone', 'Die Antwoord', 'Still Corners' ];
var ul = document.getElementById("band-list");

for (var i = 0; i < names.length; i++) {
    var name = names[i];
    var li = document.createElement('li');
     li.innerHTML = name;  
    document.getElementById("band-list").appendChild(li);
}
//extra funcion
//1
var h = 5;
function zero () {
    var multiply = h * h;
   console.log("zero =" + " " + multiply);
}
//2
var f = 6;
var g = 6;
var multiplication = function one () {return(f*g); }
console.log(multiplication());

//3
var k = 2;
var l = 3;
var m = 4;
function two (k, l, m){
    return k * l*m;
}
var multip=two(k, l,m);
console.log(multip);
//5
var str = "Natalia is my name";
var res = str.replace(/a/gi, 1);
console.log(res);

//6
var sumOf = [150, 165, 276, 467, 18753];
var sumOfArr = sumOf.reduce(function(a, b){
        return a + b;
    }, 0);
console.log(sumOfArr);

console.log(Math.min(...sumOf));

function findSmallest(sumOf) {
  return Math.min(...sumOf);
}
console.log(findSmallest(sumOf));

//4
var a = 5;
var b = 6;
var c = 7;
{ 
if ((a > 0 && b >0 && c >0 ) && (a == b && b == c && c == a)){
  console.log("Equilateral Triangle")
}
else if ((a > 0 && b >0 && c >0 ) && (a == b || b == c || c == a)){
  console.log("Isosceles Triangle")
    }
    else {
  console.log("Scalene Triangle")
} 
}

//7
var sum = 0;
var numbers = [1,2,3,4,5,6,7,8,9,10];
for (var i = 0; i < numbers.length; i++ ) {
    if ( (numbers[i] % 2) == 0) {
        sum += numbers[i]
    }
}
console.log(sum)

//8
let arri = [1, 2, 3, 4, 5, 6];
let sumr = 0;
for(let i = 0; i < arri.length; i += 2) {
   sumr += arri[i];
}
console.log(sumr);

let arr = [1, 2, 3, 4, 5, 6];
let sume = 0;
arr.forEach((elem, i) => {
   if(i % 2 === 0) {
      sume += elem;
   }
});
console.log(sume);

//9 
for (i=0; i<=10; i++){
if(i % 2 === 0){
    console.log(i);
  }
}

//10
for(i=10; i<=20; i++){
if(i % 2 != 0){
    console.log(i);
  }
}






