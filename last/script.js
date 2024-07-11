fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(data => {
        const recipeGrid = document.getElementById('recipeGrid');

        data.recipes.forEach(recipe => {
            const recipeCard = document.createElement('div');
            recipeCard.className = 'recipeCard';

            const recipeImage = document.createElement('img');
            recipeImage.src = recipe.image;
            recipeImage.alt = recipe.name;

            const recipeName = document.createElement('h2');
            recipeName.textContent = recipe.name;

            const recipeRating = document.createElement('h4');
            recipeRating.textContent = `Rating: ${recipe.rating}`;

            recipeCard.appendChild(recipeImage);
            recipeCard.appendChild(recipeName);
            recipeCard.appendChild(recipeRating);

            recipeGrid.appendChild(recipeCard);
        });
    });
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const recipeGrid = document.getElementById('recipeGrid');
    
    const fetchRecipes = (query) => {
        fetch(`https://dummyjson.com/recipes/search?q=${query}`)
            .then(res => res.json())
            .then(data => {
                recipeGrid.innerHTML = '';
                data.recipes.forEach(recipe => {
                    const recipeCard = document.createElement('div');
                    recipeCard.className = 'recipeCard';
                    recipeCard.innerHTML = `
                        <img src="${recipe.image}" alt="${recipe.name}">
                        <h3>${recipe.name}</h3>
                        <p>Rating: ${recipe.rating}</p>
                    `;
                    recipeGrid.appendChild(recipeCard);
                });
            });
    };
    
    searchButton.addEventListener('click', () => {
        const searchQuery = searchInput.value;
        fetchRecipes(searchQuery);
        const foot = document.getElementById("footer");
        foot.style.display="none";
       
    });
    
   
    fetchRecipes('');
    
// / iteration methods
// --> foreach, map, filter, find, findIndex

// const arr = ["a", "b", "c", "d", "e"];

// function printData4(fir, sec, th, fr) {
//     console.log(fir, sec, th, fr);
// }

// function printData3(fir, sec, th) {
//     console.log(fir, sec, th);
// }

// function printData2(fir, sec) {
//     console.log(fir, sec);
// }

// // for (let i = 0; i < arr.length; i++) { //prints the ele then index then whole arr
// //     printData3(arr[i], i, arr);
// // }
// console.log("------------------");
// arr.forEach(printData2); //gives the ele and the indx
// console.log("------------------");
// arr.forEach(printData3);  //gives the ele ind and the array
// console.log("------------------");
// arr.forEach(printData4); //same as above but fourth para undefined
// console.log("------------------");
// //is a format see w3c