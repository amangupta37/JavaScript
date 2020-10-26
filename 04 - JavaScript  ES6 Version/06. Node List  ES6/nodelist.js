/*-------------------------NODE LIST IN ES6----------------------------*/


/*  

    Node list is a collection of nodes extracted from a documents
    
    documents  basically consist of html elements organised in hierarichal tree like structure by using parent child relationship
    
    nodes are the html elements.
    
    querySelectorAll() method in DOM will always returns a NODE LIST hence its is used for getting node list in JS.
    
    
    
*/

//------------------------EXAMPLE OF NODE LIST--------------------------





//-------------------1. Use of INDEX VALUE in NODE LIST-----------------

/*
        Nodelist can be accessed by its index value like here we can observe that we have three paragraph out of three  1 paragraph does not contain any message so if we want to put some text in paragraph 3 then we can use DOM manipulation
        
        also if we use QUERYSELECTORALL() method to select all the paragraph then it will going to select all para and store it into the NODE LIST and provides INDEX VALUE to each para
        
        
        1.<p>Hello World !!!</p>  ------> its index value is 0
        
        2.<p>Let us explore JS</p>  ------> its index value is 1
                
        3.<p id="demo">_________</p>  ------> its index value is 2
        
        
        NODE LIST should not be confused with ARRAY because both are two different thing as we can not perform operations like 
        
        1.push()
        
        2.pop()
        
        3.join()
        
          etc................
        
        in NODE LIST because above operation is only for Array.
    
*/



    var nodelist = document.querySelectorAll("p"); //select all paragraph and put it into the node list.
    
    document.getElementById("demo").innerHTML = 
        
    "Using INDEX VALUE for printing this paragraph :- "

    + nodelist[1].innerHTML;  //accessing other paragraph by using their INDEX VALUE




//---------------2. Use of LENGTH PROPERTY in NODE LIST-----------------


/*  To count number of nodes present in a NODE LIST we can use LENGTH 
    PROPERTY 
    
    Syntax of Length property =  variable_name.length;
    
*/

      var no = document.querySelectorAll("p");

       document.getElementById("nodes").innerHTML = 
           
       "The TOTAL NO OF PARAGRAPH including this para as well this Document contain = "

       +no.length; //  syntax of length property
        
      

                

//-------------------3.Looping Through NODE LIST------------------------


/*

    Length property is more useful when we want to loop through all the paragraph

*/
    var loop = document.querySelectorAll("p");

    for(var i=0;i<=loop.length;i++) //this loop will access all the para
        
            {
                loop[i].style.backgroundColor = "yellow"; 
                
            }














