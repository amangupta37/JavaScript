/*

--------------------THIS KEYWORD IN JAVASCRIPT-------------------

*/
/*
//This keyword is a reference variable that refers to the current object. or we can say that This keyword always holds the reference to a single object, that defines the current line of code’s execution context.

//ALWAYS REMEMBER THAT THIS KEYWORD IS ALWAYS USED TO ACCESS THE OBJECT 



//--------------USE OF THIS KEYWORD AT GLOBAL CONTEXT------------


//A line of code written outside a function is said to be belonging to the global context. AND the value of THIS keyword in this global context is the same as the global object.




//--------------------------CODE 1------------------------------


//As we all know that browser's  default global object( object which is accessable throughout the browser is global object) is WINDOW object( window object = default global object of browser) and hence when we write console.log(this); then THIS keyword access the default global object of the browser which is window in case of web browsers hence we get WINDOW as a final output




console.log(this);



//----------------USE OF THIS KEYWORD WITH FUNCTION------------- 

// We can also note that even inside the function the THIS keyword will access the global object of the browser that is WINDOW....




details(1998)


function details(year)
         {
             
             console.log(2018-year); // 19
              console.log(this);  // window
             
             
         }
*/

//----------------USE OF THIS KEYWORD WITH OBJECT-----------------

// If we use this keyword inside the declared object then it will print all the properties of that object  here we have created object called INFO and we have also added its properties like name,dob and a function about() inside the fuction we have declared console.log(this); which will going to print the details of object INFO because this keyword is used to access object in js code 


//We have also created another function ABOUT2 inside the function ABOUT which is now become the nested function.......inside the function ABOUT2 we have written console.log(this); which will print output as WINDOW this is because in JS  when new fuction call happen then the default object becomes as a global  object as it ALSO discussed in ABOVE CODE.(MANY PEOPLE DO NOT AGREE WITH THIS RULE BUT JS COMMITY DO AGREE WITH THIS RULE AND THIS IS VERY IMPORTANT CONCEPT)



var info = 
    {
        
         name : 'jhon',
        
        dob : 2000,
        
        
        
        about : function ()
                
             {
                    console.log(this); //  info
                    console.log(this.name);  // jhon
                    console.log(2020-this.dob);  //20
                    
                 
                    function about2()
                 {
                     
                     
                     
                     console.log(this);// window
                     
                 }
                about2();
        
        
        
              }
          
        
    };



info.about();






