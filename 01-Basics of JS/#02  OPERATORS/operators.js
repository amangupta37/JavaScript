/*

 ------------------OPERATORS IN JS--------------------------

*/

// 1.----------------MATH OPERATOS-------------------------
var now,jhonyear,mark;

now = 2018;

jhonyear=now-28;

console.log(jhonyear);
console.log(now+2);
console.log(now*2);
console.log(now/2);

// 2.-------------LOGICAL OPERATOR------------------------

 var jonage,markage;
jonage=30;
markage=50;

var age= jonage>markage;
console.log(age);

// 3.----------------TYPEOF OPERATOR-----------------------


// typeof operator tells the datatype of a value stored in variable

console.log(typeof age);
console.log(typeof 'HELLO WORLD');
console.log(typeof now);
console.log(typeof mark);

//----------------CODING CHALLENGE 1----------------------


var mheight = prompt('enter marks height');

var mmass= prompt('enter marks mass');

var BMI = mmass/(mheight*mheight);
console.log('MARKS HEIGHT IS '+mheight);
console.log('MARKS MASS IS '+mmass);
console.log('MARKS BMI is '+BMI);


var jheight = prompt('ENTER JHONS HEIGHT');
var jmass = prompt('ENTER JHONS MASS');
var jBMI = jmass/(jheight*jheight);
console.log('JHONS HEIGHT IS '+jheight);
console.log('JHONS MASS IS '+jmass);
console.log('JHONS BMI IS '+jBMI);


var comp = BMI>jBMI;
console.log('MARKS BMI IS GREATER THAN JHONS???? '+comp);


















