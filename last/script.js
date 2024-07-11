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
