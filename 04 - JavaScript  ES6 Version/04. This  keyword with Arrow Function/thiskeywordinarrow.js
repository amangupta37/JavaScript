/* 

---------------THIS KEYWORD INSIDE ARROW FUNCTION---------------------

*/


/*  
    THIS KEYWORD BEHAVIOS DIFFERENT IN case of ARROW FUNCTION and NORMAL FUNCTION.
    
    As we all know that THIS KEYWORD is basically used for pointing an object or refers to an object in JS.
    
    To understand the cocept of THIS keyword inside the ARROW function lets create an object called BOX with properties 
    
    1. color
    2. postion
    3. A method clickme()
    

*/



//----------------This keyword with NORMAL FUNCTION in ES5---------------



    var box = 
    {
          
      color : 'green', 
        
      position : 1,
          
      clickme : function() // method or function 
      {  
                
          document.querySelector('.green').addEventListener('click',
        
          function() // call back function
        
          {   
                var str = 'NORMAL FUNCTION IS USED (ES5)'+'\n\n RESULT :- This is box no is ' + this.position + ' and its color is ' + this.color;
                
                alert(str);
        
          });
        
        
       }
    
          
     }
     
     box.clickme(); // dot notation for accessing a prticular property of object
     
     
/*
    The above code will show the output as UNDEFINED on alert box while clicking green button because 
    
    1. If we use This keyword inside the nested function then function which is at last will going to access the global object 
    
    LIKE here nested function is clickme and inside the clickme their is on more function i.e CALLBACK FUNCTION 
    and we r using THIS KEYWORD in call back function and hence THIS keyword in call back function will access a GLOBAL OBJECT and we also know
    that in browser default global object is window object but we are using THIS.POSITION which is propertie of BOX object hence it will show UNDEFINED message


*/




//---------------------RECTIFYING THE ABOVE ERROR-----------------------




/*
    Till now we have seen that THIS Keyword which is used inside nested function is pointing to the global object i.e window object in case of JS 
    and hence showing UNDEFINE in ALERT BOX 
    
    So if want to access the propeties of object BOX the we need to use a trick and the trick is that 
    
    1. As we all know that THIS KEYWORD is pointing to GLOBAL object because we r using it inside the NESTED FUNCTION i.e inside the  CALL BACK FUNCTION
    now we just need to remove THIS KEYWORD and put it outside the CALL BACK FUNCTION or We can say OUTSIDE the NESTED FUNCTION so that it can refers to 
    properties of OBJECT rather than a GLOBAL OBJECT. 
*/



     var box1 = 
    {
          
      color1 : 'BLUE', 
        
      position1 : 2,
          
      clickmenow : function() // method or function 
      {  
          
          
          var keydef = this; // THIS KEYWORD IS USED OUTSIDE THE CALL BACK FUNCTION SO THAT IT CAN ACCESS THE PROPERTIE OF OBJECT i.e BOX1
          
          document.querySelector('.blue').addEventListener('click',
        
          function() // call back function
        
          {   
                var str1 = 'NORMAL FUNCTION IS USED (ES5) '+'\n UNDEFINED error is corrected now '+ '\n RESULT :- This is box no is ' + keydef.position1 + ' and its color is ' + keydef.color1;
                
                alert(str1);
        
          });
        
        
       }
    
          
     }
     
     box1.clickmenow(); // dot notation for accessing a prticular property of object




//---------------------THIS KEYWORD WITH ARROW FUNCTION------------------

/*
    We know that THIS KEYWORD with NORMAL FUNCTION by defaults points to an GLOBAL OBJECT and in case of browser by default global object is a window object
    
    but in case of ARROW function THIS keyword by defaults points to the surrounding where it is declared and not to GLOBAL OBJECT.
    
*/


     var box2 = 
     {
          
      color2 : 'ORANGE', 
        
      position2 : 3,
          
      clicknow : function() // method or function 
      {  
          
          
          document.querySelector('.orange').addEventListener('click',
        
          ()  => // ARROW function
        
          {   
                var str1 = 'ARROW FUNCTION IS USED (ES6) '+'\n THIS KEYWORD WILL POINTS TO SURROUNDING'+ '\n RESULT :- This is box no is ' + this.position2 + 
                           ' and its color is ' + this.color2;
                
                alert(str1);
        
          });
        
        
       }
    
          
     }
     
     box2.clicknow(); // dot notation for accessing a prticular property of object








     
