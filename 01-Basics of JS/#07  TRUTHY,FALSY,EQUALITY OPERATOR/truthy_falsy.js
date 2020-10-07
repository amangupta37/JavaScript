/*

--------------TRUTHY,FALSY,EQUALITY OPERATORS-----------------

*/



// FALSY VALUES ARE : undefined,null,0,'',NaN(NOt a Number)
// TRUTHY VALUES ARE : other than falsy values all are truthy


var height;
//since height is not defined we will get else part executed as undefined is a falsy value

//height =20; // when we declare height value it will execute if block as after defining value of height it become truthy 

if(height)
    {
        console.log('YOUR HEIGHT IS GOOD');
    }
else
    {
        console.log('GO FOR WORKOUT');

    }




// -----------TRICKY PART OF TRUTHY AND FALSY-----------------

 var age ;

age =0;

if(age || age ===0)
   {
       console.log('YOUR AGE IS GOOD');
   
   }
else
   {
   
        console.log('YOUR WILL DIE SOON');
       
   }
   
   
   
   
   
   
   
   
   