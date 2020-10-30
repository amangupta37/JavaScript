//-----------ASYNCHRONOUS JAVASCRIPT WITH CALL BACK---------------
/*

CALL BACK FUNCTION is a very old way of dealing with ASYNCHRONOUS IN JS


*/

function getrecipe()
{

    setTimeout( () => 
    {

        const recipe_id = [152,883,432,974];
        console.log(recipe_id);

        setTimeout( (id) =>
        {

            const recipe = {title:'iddly',chef : 'Aman'};
            console.log(`${id} : ${recipe.title}`);

            setTimeout( (chef) =>
            {

                const recipe2 =  {title:'dosha',chef : 'JHON'};
                console.log(recipe);


            },1500,recipe.chef);



        },1500,recipe_id[2]); 






    },1500);


}
getrecipe();