//---------------------------CLASSES IN ES6------------------------------

/*
    Classes actually don't add anything new to the language, they're just synthetic sugar.
    here synthetic sugar. means syntax that is designed to make things easier to read, but doesn’t introduce anything new.

    We can say that Classes are the ALTERNATIVE and more advanced  way of implementing INHERITANCE 
    
    Earlier in ES5 INHERITANCE can only be implemented through
    
    "PROTOTYPE PROPERTY" without PROTOTYPE PROPERTY and PROTOTYPE CHAIN its nearly impossible to implement INHERITANCE .
     
     ES6 comes up with more efficent and eassy way to implement INHERITANCE in JS i.e  through "CLASSES"
     
*/


//-------Implementing INHERITANCE by using PROTOTYPE PROPERTY------------

console.log("-----------INHERITANCE IN ES5---------")

/*

    Lets recall how we implement INHERITANCE in ES5 
    
    1.First We create a FUNCTION CONSTRUCTOR (parent object) which acts as a BLUE PRINT for craeting new INSTANCES (child object).
    
    2. Then we create a PROTOTYPE PROTOTYPE of FUNCTION CONSTRUCTOR.
    
    3. After craeting PROTOTYPE PROTOTYPE of FUNCTION CONSTRUCTOR.Now we add all the METHODS and PROPERTIES which we want to inherit
       in newly created object inside the PROTOTYPE PROPERTY of FUNCTION CONSTRUCTOR (parent object).

*/



// 1. Creating FUNCTION CONSTRUCTOR (parent object)

var Person5 = function(name,dob,job)
    {
        
        this.name = name;
        this.dob = dob;
        this.job = job;
        
    }
    

//2. Creating PROTOTYPE PROPERTY and adding method to FUNCTION CONSTRUCTR


    Person5.prototype.calage = function() // ADDING METHOD CALAGE () to FUNCTION CONSTRUCTR
    {
    
    
        var age = 2020 - this.dob;
        console.log(age);
    
    
    
    }
    
    var jhon5 = new Person5 ('JHON',1998,'TEACHER'); //creating new objects or INSTANCES from FUNCTION CONSTRUCTR

    console.log(jhon5) // new object is created from FUNCTION CONSTRUCTOR
    
    jhon5.calage(); // ACCESSING METHOD OF FUNCTION CONSTRUCTOR






//----------------Implementing INHERITANCE by using CLASSES-------------

console.log("---------INHERITANCE IN ES6-----------")

    class Person6 
    {
     
        constructor( name , dob , job) //Creating FUNCTION CONSTRUCTOR (parent object)
        {
            
             this.name = name;
             this.dob = dob;
             this.job = job;
            
        }
        
        
        calage ()  // ADDING METHOD CALAGE () to FUNCTION CONSTRUCTR 
        {
            
             var age = 2020 - this.dob;
             console.log(age);
        
        }
     
        //  STATIC METHOD IN CLASS
        
        static demo(){
            
            
            console.log(" STATIC message and it can not be INHERIATATE with INSTANCES")
            
        }
        
        
        
        
    }

    
    var jhon6 = new Person6 ('JHON',1998,'TEACHER'); // creating new objects or INSTANCES


    console.log(jhon6) // new object is created from FUNCTION CONSTRUCTOR
    
    jhon6.calage(); // ACCESSING METHOD OF FUNCTION CONSTRUCTOR


    // ACCESSIN STATIC METHOD with  class

    Person6.demo();

  //  jhon6.demo(); // Instaces can not access STATIC METHOD hence it will through ERROR
   
   

//--------------------STATIC METHOD INSIDE CLASS------------------------


/*

    If we use STATIC METHOD inside the class attached to a method then we can not access or use 
    that method with new objects or INSTANCES which is inherited from BLUE PRINT.
    
    above is the example of STATIC METHOD 
    
    and we can also observe that we can only access STATIC METHOD by class name  but not with INSTANCES created 
    
    means 
    
    it can be accessed by ----->  Person6.demo();
    
    it can not be accessed by -------->  jhon6.demo();

*/














