/*

---------------LEXICAL SCOPING OR SCOPE CHAIN IN JS-------------

*/


/*
Lexical Scope means that in a nested group of functions, the inner functions have access to the 
variables and other resources of their parent scope,But reverse is it is not possible.
*/
//----------------------------CODE 1----------------------------

/*

Below code is an example of LEXICAL SCOPING as we can see that the inner most function i.e child()
can access all the variables and resources of parent() and grandfather() function but if we want 
to access the variable and resources of CHILD() function from function grandfather() then it will 
show error because in lexical scoping only innner most function are allowed to access all resources
of other functions but opposite of it is not possible.

*/



function grandfather() 
{
    var name = 'Hammad';
    
          //console.log(age);
         
         function parent() 
            {
        
                 var lastname='steve ';
                
                  // console.log(age);
                   
                function child()
                     {
                           var age =18;
            
                            console.log(name+' '+lastname);
                    
                     }
                    child();  //function call
           
            
            }
            parent(); // function call


}

grandfather(); // function call


//-------------------------CODE2--------------------------------


/*
This code showws that the inner most function call also have access to Global variable it didn't even 
matter that variable is declared outside the parent function then also it can be accessable through 
inner function.
*/


var a  = 'hello';  //global variable


function first()  // parent function 
{
    
    var b = 'hii'; 
    
    
    function second() //child function
    {
        var c = 'bye'; 
        console.log(a+' '+b+' '+c);   
    
    }
    second();
    
}
first();


//---------------------------CODE 3----------------------------


// Through function expression we can also achive the lexical scoping 


var a = function() // parent function
{
    
    var foo = 'Print me';
    
    var b = function() //child function
    {
        console.log(foo);
    }
    b(); //function call
}

a();  // function call


//----------------------------CODE 4----------------------------


/*

This code is very different from all other code as we can observe that ZOO which is
decalerd twice a time in the code i.e in global scope as well as inside the function d()
only its value is changed inside the function d(). Now when we access the value of ZOO 
from inner most function e() then it will not print the value of ZOO in global scope i.e 
'Will it get printed????' because the value of ZOO is updated or we can say MUTATED as 
'Miracle Happens!!'. hence it prints the updated value of variable ZOO......

*/

var zoo = 'Will it get printed????'

    var d = function()
    {
        var zoo = 'Miracle Happens!!';
        
        var e = function()
        {
            console.log(zoo);
        }
        e()
    }

d();
