/*---------------------LET AND CONST KEYWORD-------------------*/


//-----------------------1. CONST keyword------------------------


const name ='Aman';
console.log(name);


/*
----------"Type mutation is NOT allowed with const keyword"-----

         
name= 'raju';
console.log(name); // it will genrate an error

*/

//------------------------2. LET Keyword------------------------


let a = 10;
console.log(a);

//  "Type mutation is  allowed with let keyword"

a =50;
console.log(a);

//-------------- BLOCK SCOPING Through LET & CONST Keyword------




//  1.   " Block scoping is not possible with VAR keyword "


    if(1)
    {
        var firstname = "Smith";
    
    }
    
    console.log(firstname); // firstname is even accessable outside the block {}




//  2. " Block scoping is possible with LET & CONST keyword "

      if(1)
    {
        let fname = "Jhon";
        const lname = "Cena";
    }
    
    console.log(fname);// Fname is NOT accessable outside the block {}

    console.log(lname);//Lname is NOT accessable outside the block {}



// For VAR Keyword we use IIFE for achivoing data privacy but in    LET AND CONST keyword we use BLOCK SCOPING for achiving data    privacy.
    

    // data privacy through BLOCK SCOPING

     {
         let d =35;
         const z =69;
            
     }
      
     console.log(d);// d  is NOT accessable outside the block {}
     console.log(z);// z i s NOT accessable outside the block {}


// hence we achive data privacy through block scoping with LET      and CONST keyword























