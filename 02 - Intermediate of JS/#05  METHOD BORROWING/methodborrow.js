//--------------METHOD or FUNCTION  BORROWING IN JS------------


// The concept of using the pre written code again and again in the another JS code is called METHOD BORROWING 


// below is the example of method borrowing as we can see that we have created a method CALAGE() inside a object DATA for the calulation of age of a person. then we have created another new object i.e  NEW DATA for calculating the age of another person but rather than writting the method to calculate age we have just used the method of pervious JS code i.e CALAGE() to perform the age calculation 

// newdata.calage = data.calage; by this way we have treate the fumction CALAGE as variable and put the  =  sign so that it can assigned to  data.calgae and can access the method CALAGE(). 





var data =
    {
        
        firstname : 'HARRY' ,
        
        lastname : 'POTTER' ,
        
        bornage  :  1995 ,
        
        calage : function()
        {
          
            
            console.log(2020-this.bornage);
            
            
            
        }
        
        
        
        
    };

data.calage();



var newdata = 
    {
        
        firstname : 'PAUL' ,
        
        lastname : 'WALLKER' ,
        
        bornage  :  1985 
        
        
        
    };


newdata.calage = data.calage;  //method borrowing 

newdata.calage() // function call





