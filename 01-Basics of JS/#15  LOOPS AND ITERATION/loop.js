/*
------------------------loops in JS---------------------------
*/

//------------------------1.FOR LOOP-------------------------- 

/*

// basic for loop syntax and printing

for(var i=0;i<10;i++) // increment by 1
    {
        
        console.log(i);
        
    }

// increment by 2

for(var j=0;j<10;j+=2)
    {
        
        console.log(j);
    }

//-------------1(a)...FOR LOOP BY using ARRAY-------------



var char = ['jhon' , 'cena' , 1998, false];

for(var l=0;l<3;l++)
    {
         console.log(char[l]); // for loop is required to display desired name just by declaring the index value of array in loop
    }


var detail = ['jhon' , 'cena' , 1998, false,'noe','root','panther','steve','mark','henery'];

for(var k=0;k<detail.length;k++) // to display all the element in array for ease we use .length keyword which automatically count the length and pass the value to for loop
    {     
        
         console.log(detail[k]);
    }
          


//------------------------2.WHILE LOOP------------------------


var h=0;

while(h<10) // while loop 1st check the condition if condition is true the inner block of code will execute otherwise it will not execute.
    {
         
        console.log(h);
        h++;
        
    }




//---------------3.BREAK AND CONTINUE STATEMENTS--------------


//------------------------ a. BREAK --------------------------


//The break in JS is a loop control statement which is used to terminate the loop. 




var info = ['jhon' , 'cena' , 1998, false];

for(var f=0; f<info.length ; f++)
    {
        
        if (typeof info[f] !== 'string')
        break;
        
        console.log(info[f]);
    }



//----------------------b. CONTINUE --------------------------


//As the name suggest the continue statement forces the loop to execute the next iteration.

//When the continue statement is executed in the loop, the code inside the loop following the continue statement will be skipped and next iteration of the loop will begin.




var info = ['jhon' , 'cena' , 1998, false];

for(var f=0; f<info.length ; f++)
    {
        
        if (typeof info[f] === 'string') // rather than string it will print all value
        continue;
        
        console.log(info[f]);
    }


*/


/**
*   The variables 'firstInteger', 'firstDecimal', and 'firstString' are declared for you -- do not modify them.
*   Print three lines:
*   1. The sum of 'firstInteger' and the Number representation of 'secondInteger'.
*   2. The sum of 'firstDecimal' and the Number representation of 'secondDecimal'.
*   3. The concatenation of 'firstString' and 'secondString' ('firstString' must be first).
*
*	Parameter(s):
*   secondInteger - The string representation of an integer.
*   secondDecimal - The string representation of a floating-point number.
*   secondString - A string consisting of one or more space-separated words.
**/
function performOperation(secondInteger,secondDecimal,secondString) 

{
    
    const firstInteger = 4;
    
    
    const firstDecimal = 14.0;
    
    
   const firstString = 'HackerRank';
    

        return   firstInteger+secondInteger;

        return   firstDecimal+secondDecimal;

    return firstString+secondString;
}




console.log(performOperation(12),performOperation(10);
//console.log(performOperation(4.32));

//console.log(performOperation(10));







/*




<marquee behavior="scroll" direction="left" scrollamount="6">
<img src="logo/1.jpg" width="235" height="82" alt="">
<img src="logo/2.jpg" width="149" height="129" alt="">
<img src="logo/3.jpg" width="235" height="82" alt="">
<img src="logo/4.jpg" width="144" height="122" alt="">
<img src="logo/16.jpg" width="85" height="86" alt="">
<img src="logo/5.jpg" width="235" height="82" alt="">
<img src="logo/6.jpg" width="235" height="82" alt="">
<img src="logo/7.jpg" width="235" height="82" alt="">
<img src="logo/8.jpg" width="235" height="82" alt="">
<img src="logo/9.jpg" width="235" height="82" alt="">
<img src="logo/10.jpg" width="235" height="82" alt="">
<img src="logo/11.jpg"width="225" height="53" alt="">
<img src="logo/12.jpg" width="88" height="86" alt="">
<img src="logo/13.jpg" width="216" height="58" alt="">
<img src="logo/14.jpg" width="471" height="60" alt="">
<img src="logo/15.jpg" width="106" height="86" alt="">


</marquee>					


*/


























  


















