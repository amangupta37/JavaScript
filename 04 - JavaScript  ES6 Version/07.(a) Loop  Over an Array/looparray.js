//-------------------------------LOOP Through an Array--------------------------




//-----------------------------LOOPING IN ES5----------------------------------


/*

    If we want to change the text of each box then we need loop so that we can access each box and makes change what ever we wants
    
    In ES5 we have two ways of completing the above task
    
    1.Through simple For loop
    
    2.Through MAP() or forEach() Method.
    
    
    If we use method the we can't able to use keywords like
    
    1.Break
    
    2.Continue 
    
    and in above task we have to change the TEXT of 2 boxes only hence we require CONTINUE keyword to complete this task 
    
    therfore we can't able to use MAP() or forEach() methods to complete the above task
    
    
*/
  
 //---------------------CHANGING TEXT BY USING for loop in ES5-----------------



    var box5 = document.querySelectorAll('.box');


    var convert5 = Array.prototype.slice.call(box5);

    // accessing each elements stored in array through FOR loop

    for(i=0;i<convert5.length;i++)
        {
            
            if(convert5[i].className === "box blue")
            continue;
            
            
            convert5[i].textContent = "text changed to blue";
            
        }

//-----------------------------LOOPING IN ES6----------------------------------


/*
    their are two lattest loops are introduced in ES6 
    
    1. FOR in Loop -----> only works with object
    
    2. For of Loop -----> can be used over DS like ARRAY,STRING,MAPS,NODE LIST
    


*/


//----------------------------FOR IN LOOP ES6-------------------------------


    console.log("-----------FOR IN LOOP IN ES6 -------------")


     let person = {
         
         f_name : 'STEVE',
         l_name : 'JOBS',
         age:38
         
         
         
     };



    for( let x in person )
        {
            
            console.log(person[x]);
            
        }
       
   

//----------------------------FOR OF LOOP ES6----------------------------------

/*
    As we know that FOR OF LOOPS are basically used with DS like
    
    1.ARRAY
    
    2.STRING
    
    3.MAPS
    
    4.NODELIST
    

*/
     console.log("-----------FOR OF LOOP IN ES6 -------------")

//----------------------1. Looping over an ARRAY ------------------------------


     console.log("------1. FOR OF LOOP over an ARRAY ---------")


    let cars = [ "BMW" , "AUDI" , "MERCEDIES" , "ROYLROCS" , "MINI" ];
   
    for(let z of cars )
    {
        
        console.log(z);
        
        
       
    }

//----------------------1. Looping over an STRING -----------------------------

     console.log("------2. FOR OF LOOP over an STRING ---------")

    let str = 'JAVASCRIPT';
    
    for(let v of str )
        {
            console.log(v);
            
        }





//------------------CHANGING TEXT BY USING FOR OF loop in ES6-----------------   
/*
    In ES5 we have used FOR LOOP for accessing ecah elements and changing the text of all boxes
    
    In ES6 we will use FOR OF LOOP for doing same task as it is done by FOR LOOP in ES5 
    
    FOR OF LOOP reduces the complexity of code as well as no of steps also reduces as compared to for loop in ES5


*/

     let box6 = document.querySelectorAll('.ox'); // return NODE LIST


    let convert6 = Array.from(box6); // extract data from NODE LIST and store it into an ARRAY



    for(let st of convert6 ) // FOR OF LOOP
        {
            
            if(st.className==="ox blue") 
                continue;
            st.textContent = "text changed to blue"
            
            
            
        }


//---------------------------INCLUDES() METHOD IN ES6-------------------------


/*
    INCLUDES() method is used to determine weather a array or string contains a specific elements or not
    
    if ARRAY / STRING contains the desired element then INCLUDE() METHOD will returns TRUE
    
    And if ARRAY / STRING DOES NOT contains the desired element then INCLUDE() METHOD will returns FALSE
    
    
    SYNTAX :-
    
    Array.INCLUDE(element_to_be_search, position at which serch should begin)
    
    String.INCLUDE(element_to_be_search, position at which serch should begin)
    


*/

//EXAMPLE :-


    console.log("----------INCLUDES() METHOD IN ES6---------------")

//----------------------1. Include method with ARRAY--------------------------



     console.log("--------1. INCLUDES() method with ARRAY------------")
    

    let t = ["tysion" , "musk" , "pichai" , "bezos", "zukerbug"];



    let check = t.includes("musk");

    console.log(check);

      let check1 = t.includes("MUSK"); // also test for case sensitve

       console.log(check1);





//----------------------2. Include method with STRING-------------------------

   console.log("--------2. INCLUDES() method with STRING------------")


        let s = "WELCOME TO JS COURSE";

        let h = s.includes("TO");

        console.log(h)

        let h1 = s.includes("to"); // also test for case sensitve


        console.log(h1)




//---------------IMPORTANT APPLICATION OF INCLUDES() METHOD-------------------

/*

        INCLUDE() METHOD CAN BE USED IN PLACE OF === operator in above code in if statement
        
        example:-
        
        if(st.className  === "ox blue") --->  if(st.className.include('ox')) 
        
        
        

*/


//-----------------------EXPERIMENT-----------------


console.log("-difference between FOR LOOP and FOR OF LOOP-")



 let r = ["aman","gupta","amit","joe"]; //ARRAY

console.log("---------------FOR LOOP----------------")

for(let l=0;l<r.length;l++) // SYNTAX OF FOR LOOP
    {
        
        console.log(r[l]);
    }

console.log("---------------FOR OF LOOP----------------")


  for(k of r) // SYNTAX OF FOR OF LOOP
  
  {
      
      console.log(k)
  }









