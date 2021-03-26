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