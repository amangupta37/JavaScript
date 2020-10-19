/*

------------------BIND,CALL & APPLY METHODS IN JS--------------
*/

//--------------------1. use of CALL() method-----------------

var jhon = 
    {
        name : 'JHON',
        job : 'STUDENT',
        
        details : function (age,party)
        {
            
            if(age>=18)
                {
                    console.log(this.name+' your age is '+age +' eligible to vote and your proffession is '+this.job+'  You have voted to '+party+ '!!!!');
                    
                }
            else 
                {
                    console.log(this.name+' your age is '+age +' Not eligible to vote and your proffession is '+this.job+' your vote to '+party+ ' *Not Counted*');
                    
                    
                    
                }
            
            
            
        }
        
        
}



 jhon.details(17,'CONGRESS'); // FUNCTION CALL


//--------------------ANOTHER OBJECT EMILY--------------------


var emily =      
    {
        name : 'EMILY',
        job : 'TEACHER'
        
    }

//----------method borrowing through CALL() method -----------



jhon.details.call(emily,19,'BJP') // function call of emily by using CALL() method






//--------------------2. use of APPLY() method-----------------

/* It is similar to call() method but it pass argument in array 

 since the above function is accepting parameter not in array form hence we APPLY() method will not work here */


//jhon.details.apply(emily,78,'bjp'); //apply() method 


//----------------------3. use of BIND() method-----------------

var store = jhon.details.bind(emily); //BIND METHOD

store(18,'BJP'); // FUNCTION CALL

































