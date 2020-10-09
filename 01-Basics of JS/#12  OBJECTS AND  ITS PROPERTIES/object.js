/*

---------------------OBJECTS IN JAVASCRIPT--------------------
*/


//--------------------Basics of objects-----------------------


var detail = //here detail is name of object
    
    {
        firstname: 'JHON', //here firstname is key which stores string value 
        
        lastname: 'CENA',  // string
        
        age : 23,// number
        
        friends : ['mark','henry','root','harry'], //array
        
        male : true //boolean
        
    };

console.log(detail);

//------------------------------------------------------------


//---------Ways to access a key value of object---------------



//-------------------Method 1(Dot notation)------------------

console.log(detail.firstname); 


//-----------------Method 2(bracket notation)-----------------

console.log(detail['lastname']); // Method 2(bracket notation)


var x = 'age';            // Modified version of method 2
console.log(detail[x]);

//------------------------------------------------------------
    
    
console.log(detail.friends); // displaying elements stored in array

//------------------------------------------------------------
    
    
//---- Ways to mutate (update) the value of  key in object----



//-------------------Method 1(Dot notation)------------------

detail.age = '43';

//-----------------Method 2(bracket notation)-----------------

detail.male = false;

console.log(detail);


//------------------------------------------------------------



//-------------------Creating a new Object--------------------

var ndetail = new Object();
ndetail.firstname = 'Mark';
ndetail.lastname = 'henery';
ndetail.age = 65;
ndetail.frnd = ['joe','root','cook'];

console.log(ndetail);































