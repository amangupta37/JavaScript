/*

----------------------JavaScript | Hoisting---------------------

*/

// HOISTING IS COMPLETELY BEHIND THE SCENE PROCESS

//In JavaScript, Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution.


// --------------------1. VARIABLE HOISTING ------------------

// In  JS , variable hoisting means in the background the Javascript  implicitly makes undeclared variable as global scope.

// We can do the declaration part of variable anywhere in the code we want because JS implicitly makes undeclared variable as global variable  in the background.

//****This means that all undeclared variables are global variables.

//--------------------------code 1-------------------------------


var age; // declartaion (age is now a 'undeclared variable');
age=18; // intialization (age is now 'declared variable');

console.log(age);


//--------------------------code 2-------------------------------

age = 19 ; // intialization
console.log(age);
var age;   // declaration 



// code 1 and code 2 work entirely different behind the scene as in code1 age declaration and intialization both are done in right way. But in CODE 2 we can see that var age declaration is done after printing the value of age and though their is no error because JS implicitly makes undeclared variable as global variable. Hence it implicitly make the var age as a global variable and no error is generated.


 // *** It is also important to note that the intialztion of variable can never implicitly makes as global variable. 




//--------------------------code 1(a)---------------------------


var age; // declartaion (age is now a 'undeclared variable');
age=14; // intialization (age is now 'declared variable');

console.log(age);


//--------------------------code 2(a)---------------------------

var dob ;      // declaration  OR undeclared variable
console.log(dob);
dob = 1998 ;   // intialization  OR declared variable 



// code 1 and code 2 work entirely different behind the scene as in code1 age declaration and intialization both are done in right way. But in CODE 2 we can see that DOB intializtion (DOB=1998) is done after printing the value of DOB and their is  error because JS implicitly makes UNDECLARED VARIABLE(var dob) as GLOBAL VARIABLE  NOT a DECLAED VARIABLE (DOB =1998) as global variable . Hence it will show UNDEFINED as output because DOB = 1998 will not be considered as GLOBAL VARIABLE.


//-------------------2.FUNCTION HOISTING -----------------------

  
//-------------2(a).FUNCTION DEFINATION HOISTING----------------


//In  JS , function hoisting means in the background the Javascript implicitly makes function declaration as global variable.


//--------------------------CODE 1------------------------------


 function details()  // function defination
           
           {
               var a=10 ;
               console.log(a);
           }
              
details();  // function call
          

//--------------------------CODE 2-----------------------------


detail();  // function call

function detail()  // function defination
           
           {
               var a=20;
               console.log(a);
           }
              

//code 1 and code 2 work entirely different behind the scene as in code1 FUNCTION CALL and FUNCTION DEFINATION both are done in right way. But in CODE 2 we can see that FUNCTION DEFINATION is done after FUNCTION CALL and though their is no error because JS implicitly makes FUNCTION DEFINATION as globaly declared. HENCE their is no error generated.



//------------2(b).FUNCTION EXPRESSION HOISTING-----------------


//In  case of FUNCTION EXPRESSION JS never implicitly makes it as global declarartion . 




//------------------------CODE 1--------------------------------

var details = function()  //function expression
     {
         
         
         var z=199;
         console.log(z);
     }

    
details(); // fuction call




//--------------------------CODE 2------------------------------


 /* mydetails();  // function call

var mydetails = function() // function expression
     {
         
         
         var z=100;
         console.log(z);
     }

   */ 

//code 1 and code 2 work entirely different behind the scene as in code1 FUNCTION CALL and FUNCTION EXPRESSION both are done in right way. But in CODE 2 we can see that FUNCTION EXPRESSION is done after FUNCTION CALL and that  will generate error because JS never implicitly makes FUNCTION EXPRESSION as globaly declared. HENCE ERROR will be generated in CODE 2.


// We have put the above code in comment because it will generate ERROR and due to that below all the code will not able to show their output

//------------ SOME MORE EXAMPLE OF HOISTING VARIALBE-----------

// When we try to print the value of spy its shows UNDEFINED as output because  JS implicitly make var spy as a global varialbe and leave the intiaized value 'spy = 1000' as the bottom of the print statement thats why var spy when declared as a global variable does not have any value to print hence print UNDEFINED as a output

console.log(spy);
var spy =1000;



//------ MIXED EXAMPLE OF FUNCTION AND VARIABLE HOISTING -------



//-------------------------CODE 1-------------------------------


//  This is the mixed example of VARIABLE and FUNCTION hoisting as we all know that the variable which is inside the function its scope never come out of the block here l=1990 is a local variable and its value only valid under the block and L =100000 is a GLOBAL VARIABLE which can be access through out the program  but when it goes inside the function defination its value is allready updated with L=1990 hence rather than printing the value as l =10000 its will print l =1990


var l = 10000; // global variable 

function js ()
       {      
            
             
             var l = 1990;  // local variable
             console.log(l);
          
    
       }


console.log (l);

js(); // function call


//-------------------------CODE 2-------------------------------

// As we all know that the variable which is inside the function its scope never come out of the block but in this code we can see that the value of X=69 is printed in output but  VAR W = 87 is showing ERROR while we trying to print the value of W . This is because x = 69 is not a declared variable and The undeclared variable is assigned as global scope by javascript.where as W has its declaration part as well as intialization part hence its scope is within the block only. 

// this rule is  only possible when no prameter is passed into the function as we can clearly observe that in function IMP() we haven't passed any parameter thats why the above rule is valid because it is implicitly executed by compiler itself.

// The above concept is valid for both function declaration as well as function expression 


/*
function imp()  // fuction declaration 
     {
          x=69;  // undeclared variable 
          var w= 87;  // declared variable 
         
     }


imp(); // function call

console.log(x);  // 69
console.log(w);  //ERROR
*/

//---------------------------CODE 3-----------------------------


// In this code parameter is passed into the function TEST(X) hence the concept of this code will be entirely different from the above code because compiler will note assume something implicitly as parameter is passed by the user.


var x = 300;  // global variable

function test(x)
{
    x=1000000;  // local variable
    
    console.log(x); // print 1000000
    
    
}

test(x);

console.log(x) // print 300

//------------MIXED EXAMPLE HOISTING WITH IF STATEMENT----------



//--------------------------CODE1-------------------------------


//In this case, since no value is assigned to the variable ‘x’ declared at the top of the test() function, JavaScript automatically assigns the value ‘undefined’ to it. Since the if-condition is evaluated to false, the ‘console.log()’ statement prints ‘undefined’ on the console.


var x; 
x = 10; 

function test() 
{ 
	var x; 
	if (x > 20) { 
		x = 50; 
	} 

	console.log(x); 
} 

test(); 


 
//--------------------------CODE 2------------------------------


// In the below code when the function is called then the code inside the function test() will executes.....here IF STATEMENT will be evaluated 1st as we can obsever that it already contain FALSE as a condition  so the code which is inside the block of IF statement will not execute...... after that console.log(x);  will be evaluated as we didn't have value of x now so it will print output as UNDEFINED........ after that console.log(y); will be evaluated as we can see var y = 100;  is written below and we also know that var y will be declared as global variable but not y=100 so now console.log(y); will print UNDEFINED as output.........now another console.log(y);  will be evalutaed which will ofcourse print 100 as a final output.
  




function test() 
{ 
	if (false) { 
		var x = 50; 
	} 

	console.log(x); 
	console.log(y); 

	var y = 100; 
	console.log(y); 
} 

test(); 

















