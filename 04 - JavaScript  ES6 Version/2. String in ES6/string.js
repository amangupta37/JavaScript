/*------------------------STRINGS IN ES6-----------------------*/


//----------------------Template Literals in ES6----------------


// In ES5 we basicaly use + symbole to join large string which should be inside the  " " or ' ' but ES6 comes with new updates for improve working wtih string . i.e TEMPLETE LITERALS in ES6 

// through TEMPLETE LITERALS we can create a string by using BACKTICK ( ` ) 


//--------------------------STRING IN ES5-----------------------


var fname = "jhon";
var lname = "cena";

console.log('My name is '+fname+lname);



// STRING IN ES6


let f_name = "Smith";
const l_name = "Will";

console.log(`My name is ${l_name} ${f_name}`); // templete literal to genrate a long string in ES6


let a = 5;
let b = 10;
console.log(`Fifteen is ${a + b } and not ${2 * a + b}.`); // templete literal to genrate a long string in ES6




//------------------------STRING METHOD-------------------------



//  ES6 also provide a built-in methods for performing different     operation on strings                                                                                                              1. startsWith()                                                  2. endsWith()                                                    3. includes()                                                    4. repeat()                                                                                                                      *ALL the above methods checks case sensitivity also             
     console.log(`------------STRING METHODS----------------`)
     console.log(`string on which all methods where tested`)
     
    const str = ` " My name is ${fname} and my age is ${b} NOW " `;
    console.log(str)

    //--- 1. startwith() method :- used to search starting                letter of string
    console.log(`---------------------------------------`)
   
    console.log(`startsWith() method results`)


        console.log(str.startsWith('M'))//since string str have 'M' as starting letter hence it will show "TRUE"


        console.log(str.startsWith('j')) //since string str does not have j as starting letter hence it will show "FALSE" 

        console.log(fname.startsWith('j')) //since string FNAME have 'J' as starting letter hence it will show TRUE
         
        /* console.log(b.startsWith('20'))  it will not work with digits  "ERROR"  */



    console.log(`---------------------------------------`)
   


//-- 2. endsWith() method :-  used to search last letter of             string

      
    console.log(`endsWith() method results`)


            console.log(str.endsWith('NOW'))//since string str have 'W' as ENDING letter hence it will show TRUE


            console.log(str.endsWith('o')) //since string str does not have O as ENDING letter hence it will show FALSE 

            console.log(fname.endsWith('on')) //since string FNAME have 'N' as ENDING letter hence it will show TRUE
         
            /* console.log(b.endsWith('20')) // it will not work with digits  ERROR */


      console.log(`---------------------------------------`)

//---3. include() method :- is used to search the mid letters of          string


    console.log(`includes() method results`)


            console.log(str.includes('age'))//since string str have 'age' as middle letter hence it will show TRUE
        
            console.log(str.includes('Z'))//since string str DOES NOT have 'Z' as middle letter hence it will show FALSE
    


            console.log(str.includes('o')) //since string str have o as MIDDLE letter hence it will show TRUE 

            console.log(fname.includes('n')) //since string FNAME have 'N' as MIDDLE letter hence it will show TRUE
         
            /* console.log(b.endsWith('20')) // it will not work with digits  ERROR */

    console.log(`---------------------------------------`)

 


//--- 4.repeat() method :- is used to repeat a particular string         as many times we want

    

         console.log(`repeat() method results`)
            
                
                console.log(`${fname}`.repeat(10));
                
                console.log(` ${l_name} ${lname}`.repeat(10));

          

         console.log(`---------------------------------------`)





