/*

---------------------PASSING FUNCTION AS ARGUMENT-------------

*/

/*A programming language is said to have First-class functions when functions in that language are
treated like any other variable. For example, in such a language, a function can be passed as an 
argument to other functions, can be returned by another function and can be assigned as a value to a variable.
*/
// PASSING FUNCTION AS ARGUMENT IS ALSO COMES UNDER FIRST CLASS FUNCTION




var years = [1999,1998,1997,1996,1995];

//---------------------MAIN FUNCTION -------------------------

// This is the function CALAGE() where all the other FUNCTIONS are passed in its ARGUMENT here we have passed total 3 FUNCTION as a argument (i.e cal() , details(), hbeats()) and  also an array YEARS is passed in its argument as we can observe that CALAGE() has two arguments ARR & FN in its argument list.




function calage(arr,fn)
       {
           var fres = [];
           
           for(var i=0;i<arr.length;i++)
               {
                   
                   fres.push(fn(arr[i]));
               }
           
           return fres;
       
       }


//------------1. Function for calculating the age-------------


function cal(years)
{
    
    return 2016 - years;
    
}

//------------2. Function for comparing age groups-----------

function details(d)
{
    
    return d > 20;
}

//-----------3. Function for checking heart beat--------------

function hbeat(h)
{     
    
    if(h >=20 && h<=50)
    {
        return Math.round(206.9 - (0.67 * h));
    }
    else
        {
            return -1;
        }
}

//---------------------FUNCTION CALLS-------------------------


var x =  calage(years,cal);//PASSING 1st FUNCTION AS ARGUMENT
console.log(x);

var y = calage(x, details);//PASSING 2nd FUNCTION AS ARGUMENT 
console.log(y);

var z = calage(x,hbeat);// PASSING 3rd FUNCTION AS ARGUMENT
console.log(z);



















