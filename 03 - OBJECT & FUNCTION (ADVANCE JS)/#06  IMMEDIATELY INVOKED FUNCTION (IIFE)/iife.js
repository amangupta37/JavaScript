/*

-----------IMMEDIATELY INVOKED FUNCTION EXPRESSION------------

*/



//An IIFE (Immediately Invoked Function Expression)is a JavaScript function that runs as soon as it is defined



//It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts:

//The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.

//The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.


(function game ()
      {
           var score =Math.floor( Math.random() * 2);
           if(score === 1)
               {
                   console.log('A');
               }
            else 
                {
                    
                    console.log('B');
                    
                }
      
       }
)  ();  



//---------------PARAMETER PASSING INTO IIFE------------------



(function game (point,pointb)
      {
           var score =Math.floor( Math.random() * 2);
           if(score === 1)
               {
                   console.log('team A is winner');
                   console.log('with score '+point);
               }
            else 
                {
                    
                    console.log('team B is winner');
                    console.log('with score ' +pointb);
                }
      
       }
)  (10,20);  






















