//---------------------ARROW FUNCTION IN ES6--------------------




//--------------------NORMAL FUNCTION IN JS---------------------
 




    //------------METHOD 1 TO DECALRE A FUNCTION in ES5---------



    function add( a , b ) // FUNCTION DEFINATION
    {
       console.log("- SINGLE VALUE RETURN  BY USING FUN 1 OF ES5-");
        
        
        return a+b;  
        
        // return a-b; multiple value can not be passed hence it will create an error 
        
    }

    var z = add(6,2); // FUNCTION CALL
    console.log(z);

    //------------METHOD 2 TO DECALRE A FUNCTION in ES5---------


    var fun = function ( x, y ) // FUNCTION DEFINATION
    {
        console.log("-SINGLE VALUE RETURN  BY USING FUN 2 OF ES5 -");
        
        return x-y;
        
        // return x+y; multiple value can not be passed hence it will create an error
        
        
    }

    var t = fun(10,5); // FUNCTION CALL
    console.log(t);
    



//---------------------ARROW FUNCTION IN ES6--------------------




//--------------------SINGLE LINE ARROW FUNCTION----------------

/*
    The ARROW function which can return only one value is called SINGLE LINE ARROW FUNCTION
*/

    console.log("- SINGLE LINE ARROW FUNCTION IN ES 6 -");

    let sum = ( m , n ) => // ARROW function  
     m+n ; 
    
    var f = sum (10,20); // function call

    console.log(f); // printing the value

   // if we compare arrow function with method 2 of ES5 we have    writen arrow function in more shortest way by removing                                                                       1. function keyword                                           2. {} curly braces                                           3. return statment


    

//-----------------MULTILINE ARROW FUNCTION---------------------


/* The above ARROW function can only return one value if we want    a function to return multiple value we will use MULTILINE        ARROW function       
*/


// In MULTILINE ARROW FUNCTION we can use                                                                                          1. {} curly braces                                              


   //--------METHOD 2 of ES5 for returning multiple value-------
   

    var sum1 = function(j,k)
    {
        var s = j+k;
        var c = j-k;
         console.log("-MULTIPLE VALUE RETURN  BY USING FUN 2 OF ES5-");
        console.log(s);
         console.log(c);
    }

    sum1(50,20);


    //---------------MULTILINE ARROW FUNCTION IN ES6------------


    let sum2 = (r,y) => // ARROW function 
    {
        
        console.log("- MULTILINE ARROW FUNCTION IN ES 6 -");
        
        let o = r+t;
        let p = r-t;
        
        console.log(o);
        console.log(p);
        
    }

     sum2(100,80); // function call





//--------------------MAP METHOD WITH ARROW FUNCTION------------


/*

MAP() method is basically used to extract data from array

*/


//---------------WHY WE USE MAP() METHOD WITH ARRAY-------------

/*

Let us suppose that we have  DOB of person stored in an array and now we wants to calculate the age of each person 

*/


//-------------------solving problem by ES5 --------------------

/*
    here we have created an empty array to store the result and then for storing new result we have pushed each result in empty array.

*/

    console.log("--------solving problem without MAP() -----")

    let dob= [1990,2000,1982,1937]; //DOB OF 4 PERSON 

    let currentage= [];  // EMPTY ARRAY
 
    for(let i=0;  i<dob.length; i++) //  COUNT TOTAL LENGTH OF ARRAY
    {
        
       let res = 2020-dob[i]; // ACCESS EACH ELEMENT OF ARRAY
        
       currentage.push(res); // INSERT THE RESULT INTO NEW EMPTY ARRAY
        
     }

      console.log(currentage); // PRINTING THE VALUE STORED IN NEW EMPTY ARRAY


//--------solving problem by using MAP() method in ES6----------

/*
    if we solve the above problem by using ES6 then we dont need to do so many steps for solving the problem like 
    
    1. writing for loop for counting total elements in array
    2. accessing each elements of array 
    3. pushing each results in newly created empty array
    
    
    by using MAP() method the steps of solving problem will decrease because 
    
    1. MAP() method is used to extract each elements from an array also perform all the operations as specified by user 
    
    syntax :- name_of_array.MAP( operation to be performed );
    
    2. and MAP() method itself create a new array and store all the result on newly craeted array we dont need to create new array manually as what we did with ES5 

*/

// example of MAP() METHOD

console.log("-------------MAP() METHOD EXAMPLE--------------")


    var num = [1,4,9,25,36];

    var x = num.map(Math.sqrt);

    console.log(x);




console.log("--------solving problem by MAP()---------------")


    const year = [1990,2000,1982,1937];

    var age = year.map( function( el ){
    
            return 2020-el;
    });

    console.log(age);


//  ARROW FUNCTION WILL REDUCE THE LINE OF CODE WHICH IS USED IN FUNCTION

console.log("----solving problem by MAP() with ARROW FUN----")


    const year1 = [1990,2000,1982,1937];

    var age1 = year1.map( ( a ) => {
    
            return 2020-a;
    });

    console.log(age1);



//  ACESSING INDEX VALUE OF AN ARRAY WHILE USING MAP() METHOD

console.log("----INDEX VALUE OF ARRAY USING MAP()----")

    const year2 = [1990,2000,1982,1937];

    var age2 = year1.map( ( b , index ) => {
    
        let gg = 2020-b;
        
        return `Age is ${gg} and INDEX VALUE = ${index}`
    });

    console.log(age2);









