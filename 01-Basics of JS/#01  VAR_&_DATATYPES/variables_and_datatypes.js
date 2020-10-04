/*

          VARIABLES AND DATA TYPES 

*/


console.log('hello world by external JS !!!');

var firstName ="AMAN"; // string data type
console.log(firstName);

var lastName ='GUPTA';  // string data type
console.log(lastName);

var age = 28;  // number data type
console.log(age); 

var fullAge = true; // boolean data type
console.log(fullAge);

var job ; // undefined data type
console.log(job);

var gender = null; // null data type
console.log(gender);

/*
  VARIABLE MUTATION AND TYPE COERCION
*/

//  1.-------------TYPE COERCION-------------------

var firstName = 'jhon'; //STRING
var age = 28;  //NUMBER
var job;
var gender=null;
console.log(firstName + '  ' + age);//type coercion operation( converted number into string)
console.log(firstName + '  ' + job);
console.log(firstName + '  ' + gender);

var job , gender
job = 'teacher';//string
gender = false; // boolean 

//type coercion operation (convert boolean into string)
console.log(firstName+ ' is a '+job+' and he is ' +age+ '. he is girl?? '+gender);



//  2.---------- VARIALBE MUTATION------------------

// modifying the orignal value of the variable is  called mutation

age = 'twenty five';
job ='driver';
age = 30;

console.log(firstName+ ' is a '+job+' and he is ' +age+ '. he is girl?? '+gender);

alert('WELCOME TO BASICS OF  JS'); // ALERT is use to show msg as notification

var user=prompt('ENTER YOUR NAME '); // PROMPT take value from user in popup box
console.log('THANKS  '+user+' hope to see you soon !!!!!');

var bye=prompt('ENTER your last name');
console.log('bye MR.'+bye);
































