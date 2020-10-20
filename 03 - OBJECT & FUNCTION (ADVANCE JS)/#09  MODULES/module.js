/*

------------------------MODULES IN JS----------------------------

*/


//As our application grows bigger, we want to split it into multiple files, so called “modules”. A module usually contains a class or a library of functions.

//A module is just a file. One script is one module.




//-----------------------creating a module-----------------------

var budgetcontroller = 
(function() //IIFE
{
            var x =10; //variable
                    
                   
            var add = function (a) // function expression
               {
                       
                    
                     return x+a;
                       
                       
                }
                    

            
             return 
             {
                 publictest : function (b)
                 {
                     console.log(add(b));
                     
                 }
                 
                 
             }
            
            
    
}) ();




//------------------SEPERATION OF CONCERN IN JS-----------------



var budgetcontroller= (function(){

    
    var x= 23;
    
     var add= function(a){
         
         return x + a;
         
     }
 
     return {
         
         publicTest : function(b){
             return add(b);
     }

     }
                      
                      
}) ();




var UIController = (function()
{
    
    
    
    
    
    
})();



var controller = (function(bugdctrl,uictrl)
{
    
    
    var z = bugdctrl.publicTest(5);
    
    return{
        
        
        anotherpublic: function()
        {
            
            console.log(z);
        }
    }
    
}) (budgetcontroller,UIController);
                  
                  
                  
                  
            





















