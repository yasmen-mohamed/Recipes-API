let allRecipes = [];
let recipeDetails = {};
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");

// code call APIS f search input
async function getRecipes(term) {
    let apiResponse = await fetch(`https://forkify-api.herokuapp.com/api/search?&q=${term}`);//term>>parameter L function(getRecipes)//y3ne ely hed5lh el user hetl3 hna
    allRecipes = await apiResponse.json();
    allRecipes = allRecipes.recipes;//3aeza recipes bs mn8er count  
    displayRecipes();
}

//code 3rd el Recipes
function displayRecipes() {
    let cartoona = ``;

    for (let i = 0; i < allRecipes.length; i++) {

        let myId = "'"+allRecipes[i].recipe_id+"'";//5le Ae Id >>string
        cartoona += `   
        <div class="col-md-4">
        <div class="recipe" onclick="getRecipeDetails(${myId})">
          <img class="w-100" src="${allRecipes[i].image_url}" alt="">
            <h3 class="color-mine py-1">${allRecipes[i].title}</h3>
            <p>${allRecipes[i].publisher}</p>
        </div>

      </div>
        ` ;
    }

    document.getElementById('recipesRow').innerHTML = cartoona;
}

//code call l id bta3 el wsfa elw7da wtgwbhole f el object (recipeDetails)
async function getRecipeDetails(id) {

    let apiResponse = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
    recipeDetails = await apiResponse.json();
    recipeDetails = recipeDetails.recipe;
    displayRecipeDetails();
}



//code 3rd el wasfa el w7da
function displayRecipeDetails() {

    let cartoona2 =``;

    for (let x of recipeDetails.ingredients) {//(ingredients)array f Api 4ael list el wsafat
        cartoona2 +=` <li class="d-flex py-1 align-items-center font-weight-bolder"><span class="fa-li"><i class="fas fa-utensil-spoon"></i></span>${x}</li>
        `;
    }
    let cartoona = ` <div class="recipeDetials ">
    <h2 class="color-mine py-1">${recipeDetails.title}</h2>
    <img src="${recipeDetails.image_url}" class="w-100" alt="">
    <ul class="fa-ul py-3">
    ${cartoona2}
    </ul>
  </div>`;

  document.getElementById('recipeDetails').innerHTML = cartoona;

}


searchBtn.addEventListener("click", function () {//zorar el search
    getRecipes(searchInput.value);//el klma ely etktbt f searchInput>>he5odha we7otha f parameter bta3 (getRecipes)function wbeltaly tzhr swa2 pasta or salad or any sige
})