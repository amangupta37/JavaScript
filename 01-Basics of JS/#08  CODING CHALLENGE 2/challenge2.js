/*

----------------------CODING CHALLENGE 2------------------------

*/


var mG1=89,mG2=120,mG3=103;
var jG1=97,jG2=134,jG3=105;
var kG1=97,kG2=134,kG3=105;

var mavg=(89+120+103)/3;
var javg=(97+134+105)/3;
var kavg=(97+134+105)/3;

var c='CONGRATULATIONS'

console.log('MIKE avg score is '+mavg);
console.log('JHON avg score is '+javg);
console.log('KEVIN  avg score is '+kavg);

if(mavg>javg && mavg>kavg)
    {
        console.log('MIKE IS WINNER....!!!!'+c);
    }
else if (javg>mavg && javg>kavg)
    {
        console.log('JHON IS WINNER......!!!!'+c);        
    }
else if(kavg>mavg && kavg>javg)
    {
        console.log('KEVIN IS WINNER......!!!!'+c);
    }
else
    {
        console.log('MATCH IS DRAW ');
    }




















