/*

--------------------CODING CHALLENGE 4---------------------------

*/


var mark =   // Mark object
    
    {
      
        fullname : 'Mark Henery',
        
        Mheight : 10,
        
        Mmass : 20,
        
        mbmi : function ()
        {
            
            
            return this.Mmass/(this.Mheight*this.Mheight);
        }
        
        
        
        
    };
//mark.mbmi(); 

console.log('MARK\'S BMI IS:- '+mark.mbmi());



var jhon =   // jhon object
    
    {
      
        fullname : 'Jhon Cena',
        
        Jheight : 10,
        
        Jmass : 20,
        
        jbmi : function ()
        {
            
            
            return this.Jmass/(this.Jheight*this.Jheight);
        }
        
        
        
        
    };
//mark.mbmi(); 

console.log('JHON\'S BMI IS:- '+jhon.jbmi());





if(mark.mbmi() >jhon.jbmi())
    
    {
        console.log('MARK HAS GREATER BMI');
    
    }

else if (mark.mbmi() < jhon.jbmi())
   {
    
       console.log('JHON HAS GREATER BMI');
  
   }

else
  {
    
      console.log('both have same BMI ');
  
  }











