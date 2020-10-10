//----------------------Objects and Methods--------------------

//   ***** METHOD AND FUCTION BOTH ARE SAME THING*******


// 1. basic program of object using function(Method)

var myself = 
    {
         
        
        fun : function(age) // function defination
        {
            
            return 2018-age;
        }
        
        
        
    };


console.log(myself.fun(1998)); // function call

//------------------------------------------------------------

// 2. Use of 'This'  keyword in function call



var myself = 
    {
         age : 1998,
        
        fun : function() // function defination
        {
            
            return 2018-this.age;
        }
        
        
        
    }


console.log((myself.fun())) ;// function call



//------------STORING THE RESULT INTO THE OBJECT--------------



var dob = 
    {
         age : 1998,
         
        
        fun : function() // function defination
        {
            
            this.result = 2018-this.age; // storing the resulte in object jhon by using this key word and removing return keyword
        }
        
        
        
    }

  dob.fun(); // function call

console.log(dob) ;


