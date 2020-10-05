//----------------CODING CHALLENGE 1----------------------

/* BMI Problem finding the BMI of Three people with different 
  data */



var mheight = prompt('enter marks height');

var mmass= prompt('enter marks mass');

var BMI = mmass/(mheight*mheight);
console.log('MARKS HEIGHT IS '+mheight);
console.log('MARKS MASS IS '+mmass);
console.log('MARKS BMI is '+BMI);


var jheight = prompt('ENTER JHONS HEIGHT');
var jmass = prompt('ENTER JHONS MASS');
var jBMI = jmass/(jheight*jheight);
console.log('JHONS HEIGHT IS '+jheight);
console.log('JHONS MASS IS '+jmass);
console.log('JHONS BMI IS '+jBMI);


var comp = BMI>jBMI;
console.log('MARKS BMI IS GREATER THAN JHONS???? '+comp);



//-------SOLVING CODE CHALLENGE 1 BY IF/ELSE STATEMENT--------

if(BMI>jBMI)
    {
        
        
        console.log('MARK HAS A GREATER BMI AND HIS BMI IS = '+BMI);
        
    }

else
    {
        
        console.log('JHONS HAS GREATER BMI AND HIS BMI IS = '+jBMI);
    }



