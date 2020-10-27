//-------------------------------ARRAY IN ES6-----------------------------------

/*
    As we have seen that " querySelectorAll" is by default returns a NODE LIST but not ARRAY
    
    So if we want " querySelectorAll " to return an ARRAY instead of NODE LIST   in ES5 then we can use 
    
    ARRAY.PROTOTYPE.SLICE.CALL();
    
    Use of ARRAY.PROTOTYPE :-
    
    If we r doing DOM manipulation and wants to use ARRAY with all the in built methods for array such as  
    
    1.POP() 
    2.PUSH()
    3.SLICE() 
    etc.......
    
    then we need to use ARRAY.PROTOTYPE.mthod_name() to access all the methods which we wants to use with array hence its important to use ARRAY.PROTOTYPE before any methods like push() , pop() , slice () etc............while doing DOM manipulation.
    
    
*/

//----------------using ARRAY METHODS WITHOUT USING DOM manipulation-----------


        // 1. PUSH() Method

        let arr = [10,20,30,40,50];
        console.log("----------Array BEFORE Pushing-------");
        console.log(arr);

        console.log("----------Array AFTER Pushing--------");
        arr.push(60);
        console.log(arr);

        // 2.POP() Method
            
        console.log("----------Array after Poping----------");
        arr.pop(40);
        console.log(arr);
            
        // 3. SLICE() Method 

        // slice method is used to extract elements from a specified range

        console.log("---------Using SLICE() method---------");

        let new_arr = arr.slice(2,5) // display only that elements whose index value starts from 2 and ends with 5 of declared array i.e arr.
        
        console.log(new_arr);


       // 4. INDEXOF() Method 


        console.log("----------Using indexOF() method----------");                                   
        console.log(arr); 
        let index = arr.indexOf(20);
        
        console.log("Index value of 20 is = " +index)
                    
         
        
        
        // SPLICE() Method 

        // For inserting  value in the middle of the array we use SPLICE () method
        
        console.log("----------Using SPLICE() method------------");    
        console.log(arr);

        arr.splice(2,0,100); 

        
        console.log(arr)

        


//----------------using ARRAY METHODS WITH USING DOM manipulation---------------


//-----------------1. CONVERSION OF NODE LIST TO ARRAY IN ES5-------------------


/*
    now we will talk about that how we can use the above methods while using DOM manipulation
    
    if we r doing DOM manipulation then two thing which we should keep in the mind that 
    
    1. querySelectorAll will always retuns a NODE LIST and if we want to convert NODE LIST into ARRAY then we should use 
    
    ARRAY.PROTOTYPE.name_of_method.CALL();
    
    2. If we want to use any of the in built method of an ARRAY then we should write 
    
    ARRAY.PROTOTYPE.name_of_method
    
    
    and the only we r able to use IN BUILT METHODS of an ARRAY while doing DOM manipulation
    
    3. Use of CALL() method in above syntax
    
            here CALL() method is used for passing the selected elements form querySelectorAll() to slice() METHOD  of an ARRAY.
            

*/


    const example = document.querySelectorAll('.box'); // here querySelectorAll is used to select all the elements of class name BOX and store it into the NODE LIST

    

    let demo = Array.prototype.slice.call(example);



   /*               FULL EXPLANATION OF  ABOVE COMMAND
   
    
      Array.prototype.slice.call();
   
        
      1. Array.prototype :- is use for accessing IN BUILT METHOD OF an ARRAY
   
      2. SLICE() METHOD :- is an in built Method of an ARRAY which is used to extract all the elemnts of querySelectorAll() and store it into an ARRAY insted of NODE LIST.
      
      3. CALL()  METHOD :-  method is used for passing the selected elements form querySelectorAll() to slice() METHOD  of an ARRAY.
      
      
      Now , by using Array.prototype.slice.call(); we have extracted elemnts from NODE LIST and store it into an ARRAY
      
      Since all the elements are stored in ARRAY we can apply any In-bulit method of an array to the slected element
      
      their are -------> total 3 elements which is in the form of buttons and now its is stored in ARRAY and if we want to change color of all the  button  into YELLOW then this could be done by
      
      FOR EACH () Method
      
      forEach() method calls the function once for each elements stored in an ARRAY
      
      
      
      
    */



//------------------------EXAMPLE OF ForEach() Method---------------------------


        console.log("--------EXAMPLE OF ForEach() Method---------");

        let array = ["apple","orange","mango"]; // ARRAY

       
        function fun(item,index) //FUNCTION 
        {
            
            console.log(index + " " + item)
            
            
        }

        array.forEach(fun); //forEach() method { calling function once for each elements in array ny using foreach() method }



//--------------using forEach() method for DOM manipulation---------------------




//  lets now change the color of all the buttons into yellow by using               ForEach()method.

        
        // Another way of declaring forEach () and function  together
    

        demo.forEach(function(el)     
        {
            
            el.style.backgroundColor = "yellow";
            
            
            
        });





//-----------------2. CONVERSION OF NODE LIST TO ARRAY IN ES6-------------------

/*  
    In ES5
    
    Array.prototype.slice.call(); ---> used for converting node list into array
    
    
    ** In ES6
    
    
    we can use FORM() method 
    
    
    syntax :-   array_name.Form(Parameter)
         
    here Form() method is an in-built method in ES6 which creates a new array from an exsisting array or any other object.
    


*/


// Example of FORM() method in  ES6


        const boxes = document.querySelectorAll('.ox'); // store all elements into NODE LIST

        const box6 = Array.from(boxes); // form() method will extract all data from NODE LIST and will store it into an ARRAY.



        box6.forEach(myfun);



        function myfun ( s )
        {
            
            s.style.backgroundColor= "green"
            
            
            
        }











        



