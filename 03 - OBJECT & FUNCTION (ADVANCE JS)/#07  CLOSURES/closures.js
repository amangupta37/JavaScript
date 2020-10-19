/*

--------------------Closure  in JavaScript --------------------

*/


//Closure is one of important concept in JavaScript. 

//Closure means that an inner function always has access to the vars and parameters of its outer function, even after the outer function has returned.


//-----------------------CODE1--------------------------------

function retirment(rage)
{
    var a = ' years left in your retirment';
    
    return function(dob) // anonymous function
    {
        
        var age = 2020 - dob;
        console.log((rage -age) + a );
        
   
    }
    
}

//---------------FUNCTION CALL OF RETIRMENT ()----------------


var rageUS = retirment(65);

var rageGM = retirment (60);

var rageIND= retirment(75);

//------------FUNCTION CALL FOR ANONYMOUS FUNCTION------------


rageUS(1990);
rageGM (1991);
rageIND(1992);


//-------------------------CODE 2-----------------------------


function interview(job)
{    
    
    var a = ' tell me about your experience in designing ';
    var b = ' what subject do u teach ??';
     var c = ' tell me about youself';
    
    return function(name) // ANONYMOUS FUNCTION
    {
        
        if (job === 'designer')
        {
           
            console.log(name + a);
            
        }
        
       else if(job === 'teacher') 
        {
                
           console.log(name + b);
                
        }
        
       else 
       {
           
            console.log(name  + c);
            
       }
             
    }
    
}


//------ANOTHER WAY OF PASSING PARAMETER TO BOTH FUNCTION-----

 interview('teacher')('JHON');
 interview('designer')('MIKE');
 interview('driver')('SMITH');















































