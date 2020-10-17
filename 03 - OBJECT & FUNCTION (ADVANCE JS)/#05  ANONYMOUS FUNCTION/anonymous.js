/*

-------------------ANONYMOUS FUNCTION IN JS-------------------

*/


//A programming language is said to have First-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.

// ANONYMOUS FUNCTION IS ALSO COMES UNDER FIRST CLASS FUNCTION

// The function which does not have any name is called as ANONYMOUS function 

//ANONYMOUS function  has only arguments but did not have any name before arguments here we can se that we are returning the function which does not have any name but has argument NAME in its argument list .

function interview(job)
{     
    
     
    if(job === 'designer')
    {
        
        return function(name) //ANONYMOUS FUNCTION
        {
          console.log(name + 'why should we hire u as DESIGNER ???????');
         
        }
    }
    
    
    else if (job === 'teacher')
        {
            return function(name)//ANONYMOUS FUNCTION
            {
               console.log(name + 'why should we hire u as TEACHER ???????'); 
                
            }
            
            
        }
    
    else 
        {
            return function (name) //ANONYMOUS FUNCTION
            {
                console.log(name+ 'tell me about yourself??');
                
            }
            
            
        }

}

//----------PASSING PARAMETER TO interview FUNCTION-----------

var x = interview('teacher'); 

var y = interview('designer');

var z = interview('driver');


//----------PASSING PARAMETER TO anonymous FUNCTION-----------

//Since its an anonymous function and we dont know the name of the function hence passing the argument will not be possible in a simple way as we do for a normal function so for passing the parameter to anonymous function we have two ways  

//-------------------------- WAY 1----------------------------
// In this method we will store the value of INTERVIEW function in a variable and then we can attach it to the parameter of anonymous function so that the value could passed to the parameter of anonymous function. Here we can observe thst the value of we have stored the value of Inetrview function into variable X and then attach it to the anonymous function parameter i.e ('jhon')
x('jhon ');


y('mark ');


z('aman ');

//--------------------------WAY 2-----------------------------

interview('teacher')('ANDREW ');
interview('designer')('Arnold ');
interview('postman')('richi ');





