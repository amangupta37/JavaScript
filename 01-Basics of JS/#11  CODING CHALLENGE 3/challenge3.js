/*

-----------------------CODING CHALLENGE 3----------------------
*/


function tip(bill)
{

 if(bill<50)
      
     {
         return (20/100)*bill;
        
        
     }
else if(bill>=50 && bill<200)
    {
        
        return (15/100)*bill;
        
    }
else
    {
        return (10/100)*bill;
    
        
    }

}


var bill = [124,48,268];

// for calculating TIP paid at different resturent
console.log('Bellow are the details of all tips paid at diff resturent');
var ftip = [tip(bill[0]) , tip(bill[1]) , tip(bill[2])]; // function call by using array 
console.log(ftip);

//for calculating TOTAL BILL(BILL+TIP) paid at different resturent
console.log('below are the list of total bill paid at diff resturents');
var Tbill = [bill[0]+tip(bill[0]) , bill[1]+tip(bill[1]) ,bill[2]+tip(bill[2])];
console.log(Tbill);




