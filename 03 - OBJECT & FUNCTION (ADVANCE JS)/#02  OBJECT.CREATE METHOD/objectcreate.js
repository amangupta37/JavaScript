/*

----------------------OBJECT.CREATE in JS --------------------

*/


// OBJECT.CREATE method is an another way of creating object after function constructor



var details = 
    {
        calage : function()
        {
            console.log(2020-this.dob);
            
            
        }
        
        
    };


// type jhon in console to see the properties of created object

var jhon = Object.create(details);
jhon.name= 'jhon';
jhon.dob = 1998;
jhon.job = 'teacher';
jhon.calage();




var james = Object.create (details, 
                           
         {
             // another way of declearing properties
    
             name : {value :"james"},
             dob : {value : 1993},
             job : {value : 'designer'}
             
                
        });

james.calage();



















