/*
----------------TERNARY OPERATOR AND SWITCH STATEMENT----------

*/

//---------------------TERNARY OPERATOR------------------------
/*
1. The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), 
   then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is 
   falsy. 

*/


var name = 'SMITH';
var age = 15;

var drink = age>=18 ? 'CAN DRINK BEAR !!':'CAN DRINK JUICE';


console.log(name+' YOU '+drink);

//-----------------SWITCH STATEMENT----------------------------


var job='teacher';

switch(job)
    {
            case 'teacher':
            console.log(name+' has teaching job');
            break;
            
            case 'cop':
            console.log(name+' has police officer job');
            break;
            
            case 'coder':
            console.log(name+' has developer  job');
            break;
            
            case 'chef':
            console.log(name+' has cocking job');
            break;
            
        default:
            console.log(name+' has diff job');
    }

// ------------BOOLEAN LOGIC AND SWITCH STATEMENT-----------

age =14
switch(true) // for comparing integer we can use boolean value also to pass the value of variable in switch statement 
{
          case age<13:
            console.log(name+' has teaching job');
            break;
            
            case age>=13&&age<=20:
            console.log(name+' has police officer job');
            break;
            
            case age>=20&&age<30:
            console.log(name+' has developer  job');
            break;
            
           
        default:
            console.log(name+' has diff job');
}

