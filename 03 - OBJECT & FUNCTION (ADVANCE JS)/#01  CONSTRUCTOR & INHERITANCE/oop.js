/*

------------------------OOP CONCEPT IN JS----------------------

*/


//----------------Creating Object Using Constructor-----------


/*  
    
    CONSTRUCTOR or FUNCTION CONSTRUCTOR  is nothing but a parent object which acts as a blue print and through this
    blue print we can create N numbers of new objects also known as INSTANCES and we can call all these new objcet 
    as a child object....
    
    Here we can observe that how to create INSTANCES from CONSTRUCTOR 
    
*/



var Person = function(name,dob,job) //FUNCTION CONSTRUCTOR (PARENT OBJECT)
   {
       this.name = name;
       this.dob = dob ;
       this.job = 'teacher';
       
    }



//NEW OBJECT JHON CREATED FROM CONSTRUCTOR PERSON

/*
    We can create N number of objects or INSTANCES  from the FUNCTION CONSTRUCTOR
    
    But here we have tried to create only two instances FUNCTION CONSTRUCTOR

*/

var jhon = new Person('jhon' , 1998 , 'teacher'); // INSTANCE 1
console.log(jhon);

var jhon2 = new Person('jhon2' ,19982,'teacher2');//INSTANCE 2
console.log(jhon2);




//-------Implementing the concept of INHERITANCE in JS--------



var Person = function(name,dob,job) //FUNCTION CONSTRUCTOR
   {
       this.name = name;
       this.dob = dob ;
       this.job = job;     
    }

//-------------- CONSTRUCTOR PROTOTYPE PROPERTY--------------- 


// ADDING METHOD TO CONSTRUCTOR FUNCTION (i.e PERSON )

Person.prototype.calage =   function() 
       {      
             console.log(2016 - this.dob);
    
    
    
       };


// ADDING PROPERTIES TO CONSTRUCTOR FUNCTION (i.e PERSON )

Person.prototype.lastname = 'Smith'

var jhon = new Person('jhon' , 1998 , 'teacher');



var mark = new Person('mark' , 1995 , 'coder');



var james = new Person('james' , 1996 , 'driver');


//acessing method 

jhon.calage();
mark.calage();
james.calage();



//accessing properties

console.log(jhon.lastname);
console.log(mark.lastname);
console.log(james.lastname);
