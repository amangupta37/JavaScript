/*--------------------DESTRUCTURING IN ES6-------------------------



    Destructuring is the concept of ES6 and it is the way of extracting data from the DATASTRUCTURES like ARRAYS AND OBJECTS.
    
    Destructuring can be done with 
    
    1. ARRAY
    
    2. OBJECT

*/


//-------------------1. DESTRUCTURING WITH ARRAY-------------------

/*  

if we want to access each elements of an array and store each       
elements inside a single variable then it colud be done in to
    two ways 
    
    1. Through simple way (ES5)
    
    2. Through Destructuring (ES6)


*/
        console.log("\n--------1. DESTRUCTURING WITH ARRAY----------")

//------------------1.(a) Through simple way (ES5)-----------------

        
        console.log("\n--------1.(a) Through simple way (ES5)--------")

        var details = ['JHON' ,18];
        
        var name = details[0];
        var age = details[1];

        console.log(name);
        console.log(age);


/*  This is not the efficent way of extracting data and storing the     data in single variable  because if we have N no of items then     stroing data in this formate is not possible.

    Hence the concept of  DESTRUCTURING comes in role
    
*/



//--------------1.(b) Through Destructuring (ES6)------------------



    console.log("--------1.(b) Through Destructuring (ES6)---------")

    const [name1,age1]  = ['SMITH',34]; 

     console.log(name1);
     console.log(age1);





//-------------------2. DESTRUCTURING WITH OBJECT------------------

 console.log("\n---------2. DESTRUCTURING WITH OBJECT----------")


//------------------2.(a) Through simple way (ES5)-----------------

    console.log("\n---------2.(a) Through simple way (ES5)----------")
    var presonald=
          
    {
         fname:"KEVIN",
         lname:"petersen",
         age:24
              
    };

     var a = presonald.fname;
     var b = presonald.lname;
     var c = presonald.age;
    
     console.log(a);
     console.log(b);
     console.log(c);



//--------------2.(b) Through Destructuring (ES6)------------------


    console.log("---------2.(b)Through Destructuring (ES6)-----------")


     const id= // structuring
          
    {
         fname:"DAVID",
         lname:"SAM",
         age2:37
              
    };

        const{fname,lname,age2:x} = id; // destructuring

        console.log(fname);
        console.log(lname);
        console.log(x); // this also a way of accessing key




//-----------MOST IMPORTANT APPLICTAION OF DESTRUCTURING-----------

/*  One of the most important Application of destructuring can be       seen in FUNCTION because if we want to return multiple values
    from a function through RETURN KEYWORD then we can esily do with DESTRUCTURING and without DESTRUCTURING its impossible to return multiple values  by using RETURN KEYWORD 


*/




//--------- Returning Multiple Values without Using Destructuring-------


console.log("--Returning Multiple Values without Using Destructuring--")
    
  
    let dob = (a) =>
     {
         
         const C_year = new Date().getFullYear();
         
         
         
         return C_year; // only this return satement will be excuted
         
         return C_year-a; // this return satement will not excute
         
     }
     
     let res = dob(2000);
     console.log(res);

/* hence we conclude that without using DESTRUCTURING its nearly            impossible to return multiple value with the help of RETURN SATEMENT
   
   Hence now we will be using Destructuring to solve the problem
*/


//------------Returning Multiple Values Using Destructuring-------------


console.log("\n--Returning Multiple Values by Using Destructuring--")



    let dob1 = (a) =>
     {
         
         const C_year1 = new Date().getFullYear();
         
         return [C_year1,C_year1-a]; // structuring
         
         
        
         
     }
     
     let[Current_year , age4 ] = dob1(2000);  // destructuring


     console.log(Current_year);
     console.log(age4);



