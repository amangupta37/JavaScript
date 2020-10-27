//-----------------------------SPREAD OPERATOR IN ES6---------------------------------

/*

    If we want to pass multiple arguments into the function defination in the form of 
    
    1. variables
    
    or
    
    2. ARRAY 
    
    as parameter then we can use SPREAD OPERATOR for making passing argument more eassy
    



*/

//--------------PASSING MULTIPLE ARGUMENT WITHOUT USING SPREAD OPERATOR--------------

            console.log("PASSING ARGUMENT WITHOUT USING SPREAD OPERATOR");

//-----------------------1.Passing multiple VARIABLE in ES5--------------------------


    console.log("----1. Passing multiple VARIABLE in ES5----");


        function add (a,b,c,d) // multiple variables
        {
            
            return a+b+c+d;
            
        }

        var sum = add(1,2,3,4); // function call
        console.log(sum);


//----------------------------2.Passing an ARRAY in ES5------------------------------



     console.log("----2. Passing ARRAY in ES5----");

     function add1 (f,g,h,i) // multiple variables
        {
            var addnow = f+g+h+i; 
            
            console.log(addnow);
        }

        var age = [1,2,3,4]; // array

        var sum2 = add1.apply(null,age); //function call


       





//--------------PASSING MULTIPLE ARGUMENT BY USING SPREAD OPERATOR------------------

/*
    SPREAD OPERATOR is used in
    
    1. Function call :- so that we can pass array in more eassy way to Function                           defination.
    
    2. Function defination :- we can recive multiple values comming to parameter of                             function defination
    
    3. ARRAY
    
    
    
    4. OBJECTS
    


*/


                console.log("--------SPREAD OPERATOR IN ES6--------");


//----------------1.Passing an ARRAY to function call in ES6-------------------------




         console.log("--1. Passing ARRAY to function call in ES6--");


         function add2(k,l,m,n) // multiple variables for accepting values of each array elements
         {
           
             var addnow1 = k+l+m+n; 
            
             console.log(addnow1);
            
            
            
          }



            let sarray = [10,20,30,40]; // ARRAY

            add2(...sarray); // using SPREAD OPERATOR IN FUNCTION CALL
            
      


//----------------2.Passing multiple values in Function defination-----------------


     console.log("2. Passing multiple values to function def in ES6");    
    
          function add3(...input) // using SPREAD OPERATOR IN FUNCTION Defination for accepting muliple value comming from function call
            
          {
           
            
              
             var c1=input
            
             console.log(c1);
            
            
            
          }

          add3(1,2,3,4,5); // multiple function calls
          add3(1,2,3,4);




//------------------------3. Using SPREAD OPERATOR IN ARRAY--------------------------


    
     console.log("3. Using SPREAD OPERATOR IN ARRAY ES6");
   

     // concatination of two array

     let a1 = [1,2,3,4,5];  // Array 1
     let a2 = [6,7,8,9,10];  // Array 2

     let a3 =[...a1 , ...a2]; // spread operator used in Array 3 for joining two array

     console.log(a3); 


    
//--------------------4. Using SPREAD OPERATOR with OBJECTS--------------------------

  console.log("--4. Using SPREAD OPERATOR with OBJECTS--")


          console.log("1. cloning object by using SPREAD OPERATOR")

        let details =    //object
           
        {    
            
            f_name : "SETEVE",
            
            l_name  : "jobs",
            
            age :18
            
        };
       
        console.log("ORIGINAL OBJECT")

        console.log(details);



//------------------------1.  coloning object ---------------------------------------


      
      
        console.log("CLONED OBJECT")

        const clone = {...details}; // passing object by using SPREAD OPERATOR 
        console.log(clone);



//-----------------------2. Merging two Object together------------------------------
          
        console.log("2. Merging two objects together")

        const obj1 = { foo: 'bar', x: 42 };
        const obj2 = { foo1: 'baz', y: 13 };
        
        const mergedObj = { ...obj1, ...obj2 }; // merging two object by using SPREAD OPERTAOR

        console.log(mergedObj)




//-------------------------USING SPREAD OPERATOR IN DOM MAINPULTION------------------


/*
        Changing the color of the text into RED by using Spraed operator 


*/


        let hk = document.querySelector('h3');

        let box5 = document.querySelectorAll('.box'); // return a NODE LIST


        let arr = [hk,...box5]; //Though Spread Operator we collect all NODE LIST into array

        let xxx = Array.from(arr); // now  to collect every elemnets  under a single array we us ARRAY.FORM METHOD


        

       xxx.forEach( (el) => {
            
           el.style.backgroundColor = 'red';
            
        });






































