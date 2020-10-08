/*

---------------------ARRAY IN JAVASCRIPT-------------------------
       
*/

// ------------------INITAILIZE NEW ARRAY-----------------------

var names = ['harry', 'mark', 'john','mike'];// name will not work names will work as a variable  see the differnce by applying it


console.log(names);
console.log('the no of elements in array  '+names.length);



//------------------- MUTATE ARRAY DATA ------------------------

names[2] = 'ben';// it will update the value of name in posstion 2

names[names.length]='marry'; // it will update the name and put the updated name in empty space

names[7] = 'brandy'; // it will show how many empty space is their if any  and then update the value at given postion 


console.log(names);


//--------------------DIFFERENT DATA TYPE ----------------------


var detail = ['jhon' , 'smith' , 1998 , 'teacher' , false];
console.log(detail)



detail.push('blue');// insert the value at the end of  existing array
detail.unshift('Mr.'); // insert the value at the beg of existing array

console.log('UPDATED VALUES ARE:- '+detail);


detail.pop();// delete the last element of array
detail.shift();//delete the first element of array

console.log('UPDATED VALUES ARE:- '+detail);

console.log('index postion of 1998 is '+detail.indexOf(1998));
console.log(detail.indexOf(23)); // if element does not exist it will return -1  hence it is mainly used to find weather element is present in array or not



var test = detail.indexOf(23) === -1 ? 'the value not exist':'value exist in array';


console.log(test);


























