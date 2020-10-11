/*

----------------------BLOCK SCOPE IN JS-------------------------

*/


//ES2015 introduced two important new JavaScript keywords: let and const. These two keywords provide Block Scope variables in JavaScript. Before ES2015, JavaScript had only two types of scope: Global Scope and Function Scope. 

// BLOCK SCOPE is process of defining the accessability of variable within the blocks i.e within the curly brackets {}

// BLOCK SCOPE can only be achive through LET and CONST keyword in JS.Declaring a variable with CONST is similar to LET when it comes to Block Scope.


//----------------------------CODE 1----------------------------

/*

{
  let x = 2;
  console.log(x); // value of x can now only be accessable within the block 
}
 console.log(x); // it will not able to access the scope of variable  X because its scope is within the block hence we can  achive BLOCK SCOPE by using LET keyword.
*/


//---------------------------CODE 2-----------------------------


// This example shows that how VAR keyword is different with LET keyword  and the big difference between both the keyword is that we can not achive BLOCK SCOPE by using VAR keyword but it is possible through LET keyword


{
    var z =10;
    console.log(z); // it will print the value of variable Z
}
console.log(z); // even this will also print the value of variable Z because its value is accessable throughtout the code hence we can not achive BLOCK SCOPE by using VAR keyword.





//-----------------HOISTING With LET keyword--------------------


//We know that variables declared with let keywords are block scoped not function scoped and hence it is not any kind of problem when it comes to hoisting. 



console.log(name1); 
let name1='Mukul Latiyan';




























