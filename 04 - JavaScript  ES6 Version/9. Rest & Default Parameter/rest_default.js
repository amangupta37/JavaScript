//-----------------------REST AND DEFAULT PARAMETER IN JS--------------------------



/*
    If we want to pass multiple values in FUNCTION DEFINATION then we can use REST PARAMETER .
    
*/


//------------------------EXECUTING REST PARAMETER IN ES5--------------------------

console.log("EXECUTING REST PARAMETER IN ES5")
    
     function dob (){
         
         
         var arr = Array.prototype.slice.call(arguments);
         
             
         arr.forEach((el)=>{
             
             
            var sum =2018-el;
             console.log(sum)
             
         })
         
         
         
         
         
         
         
     }

    dob(1990,1991,1999,1998); // MULTIPLE FUNCTION CALLS
    dob(1994,1995,1996,1997);

//------------------------EXECUTING REST PARAMETER IN ES6--------------------------

    console.log("-------REST PARAMETER IN ES6-------");



        function dob1 (...input){
            
            console.log(`DOB stored in array ${input}`)
        
         input.forEach((l)=>{
             
             
            var sum1 =2018-l;
             console.log(`age of each person ${sum1}`)
             
         });
         
         
         
         
         
         
         
     }

    dob1(1990,1991,1999,1998); // MULTIPLE FUNCTION CALLS
    dob1(1994,1995,1996,1997);



//-----------------------------DEFAULT Parameter-----------------------------------

/*
    Default Parameter is used to define the value which is not passed in FUNCTION CALL 

*/


          console.log("-Before using DEFAULT PARAMETER IN ES6-");



          let id = (u,z) =>{
              
              console.log(2020-u);
              
              console.log(2019-u)
              
              console.log(z); // this will show undefine as output as two parameter is not passd by function call
              
              
              
          }
          id(1998); // function call



/*
        to remove that undefine message we can use DEFAULT PARAMETR in function defination itself. 


*/

//----------------------------DEFAULT PARAMETER IN ES 5 -----------------------------
/*
    In ES5, DEFAULT PARAMETER can be implemenetd by using TERNARY OPERATOR. 

*/





      console.log("-AFTER using DEFAULT PARAMETER IN ES5-");


     let id1 = (u1,z1) =>{
         
         
             z1 = (z1 === undefined) ? "value not passed !!" : z1; // default parameter 
              
              console.log(2020-u1);
              
              console.log(2019-u1);              
              console.log(z1); // this will show undefine as output as two parameter is not passd by function call
              
              
              
          }
          id1(1997); // function call


//----------------------------DEFAULT PARAMETER IN ES 5 -----------------------------
/*
    In ES6, DEFAULT PARAMETER can be implemenetd by defining missing parameter in function defination itself. 

*/


     console.log("-DEFAULT PARAMETER IN ES6-");


     function person (name,birth,lname = "cena",age = 18) // using DEFAULT PARAMETER in parameter of FUNCTION DEFINATION itself
     {
    
         this.name = name;
         this.birth = birth;
         this.lname = lname;
         this.age = age;
     }

     
     let g =new person('jhon',1998); // only two parameter is passed 

     console.log(g)

















