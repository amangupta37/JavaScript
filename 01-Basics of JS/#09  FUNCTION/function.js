/*

--------------------FUNCTIONS IN JAVASCRIPT---------------------

*/

//------------------1.SIMPLE FUNCTION CODE IN JS-----------------


function add(num1,num2) // function defination
{                                         
    
    return num1+num2;  // return statement
}




var result =add(7,10);// function call

console.log(result);   //print the result


//------2.FUNCTION IMPLEMENTATION WITHOUT RETURN STATEMENT-------


function info(username,num1,num2) // function defination
{  
    var pass = add(num1,num2);
    
console.log('Your Id is :- '+username+ ' / Password is:- '+pass);
}

info('Mike',12345,45362);




//-----------3.FUNCTION STATEMENTS AND EXPRESSION---------------


// Fuction Expression

var prof = function (job,name,age)
{
    switch(job)
        
        {
                 
            case 'teacher':
            return name+ ' is teaching coding';
            
            case 'developer' :
            return name+ ' is a SDE 2 in AMAZON';
                
            case 'driver' :
            return name+ ' is a uber cab driver';
                
             default :
                
             return name+ ' has other profession';
                
                
        }
    
        return age;
    
}
  console.log(prof('developer','JHON',19));  


// EXPERIEMENT


function exp(age,dob,name)
{   
    const h =10;
    const g=1998;
    var j = 'cena';
    
     console.log(age+h);
    console.log(dob-g);
    console.log(name+j);
       

    
}

var x = exp(18,2018,'jhon');

console.log(x);


//


function performOperation(secondInteger, secondDecimal, secondString) {

    const firstInteger = 4;
    
    
    const firstDecimal = 4.0;
    
    
    const firstString = 'HackerRank';
    
    
   
    
    console.log(firstInteger+secondInteger);
    console.log(firstDecimal+secondDecimal);
    console.log(firstString+secondString);
     
}


const res = performOperation(12,4.32,' is the best place to learn and practice coding!');

console.log(res);


function getArea(length, width) {
    let area;
    // Write your code here
    
    return area  = length*width;
}
var result = getArea(3,4.5);
console.log(result);




function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    
    return perimeter = 2*(length+width);
}
var ss = getPerimeter(3,4.5);
console.log(ss);



function factorial (num)
{
     var fact=1;
    if(fact === 0)
        {
            return 1;
            
        }
    for(var i=1;i<=num;i++)
        {
            
       fact = fact *i;
        
        }
    
    console.log(fact);

    
    
    
}

 factorial(4);




function getGrade(score) {
    let grade;
    // Write your code here
    if(score >20 && score<=30)
    {
        console.log('A');
    }
    else if(score >20 && score<=25)
    {
          console.log('B');
    }
    else if(score >15 && score<=20)
    {
          console.log('C');
    }
    else if(score >10 && score<=15)
    {
         console.log('D');
    }
    else if(score >5 && score<=10)
    {
        console.log('E');
    }
    else
    console.log('F');

    return grade;

    console.log(getGrade);
}
getGrade(11);



























