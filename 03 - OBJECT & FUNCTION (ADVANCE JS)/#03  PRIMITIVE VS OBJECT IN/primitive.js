/*

------------------PRIMITIVE VS OBJECT in JS ------------------

*/

//--------------------Primitive data type---------------------



// primitive data type holds the value 


var a =10;
var b = a;

a =100;

console.log(a);
console.log(b);



//-------------------------OBJECT-----------------------------

//object just refers or point out the value it does not holds it

 var obj1  = {
                 name : 'jhon',
                 age : 20
              };

var obj2 = obj1; // assigning all the properties of obj1 to obj2

obj1.age = 19; // mutating the value of age 

console.log(obj1.age); // 19
console.log(obj2.age); // 19




//----------------------FUNCTION------------------------------


/* 

In this code we are tring to pass the variable and object as a parameter to the function as we have variable AGE and object OBJ 
which is declared out side the function  the we have declared the function TEST(a,b) with parameter A and B. Through fuction we 
are trying to update the value of variable AGE and properties of object OBJ ,city. 

As we know that the scope of variable is only inside the function hence if we print its value outside the function then it will 
only show the global variable value  i.e 30 and  not 10 

And its important to note that the updated value of object can also be accessed outside the function also hence city property of 
OBJ1 will be printed as ramgarh

*/

var age = 30;  // global variable

var obj1  = {    // object
                 name : 'jhon',
                 city  : 'ranchi'
            };

function test(a,b) // function
{
    a=10;    // local variable accessable inside the function only
    
    b.city = 'ramgarh'  // object is accessable throught the code 
    
   // console.log(a);
    
    
}

test(age,obj1);


console.log(age);
console.log(obj1.city);
