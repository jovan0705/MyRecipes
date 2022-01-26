// Reacct
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

// Store
import { fetchRecipes } from "../store/actionCreators/recipesCreator";

// Components
import RecipeCard from "../components/RecipeCard";
import RecipeCardLoading from "../components/RecipesCardLoading";
import InternalServerError from "../components/InternalServerError";

const RecipesPage = () => {
  const dispatch = useDispatch();
  const { recipeReducer } = useSelector((store) => store);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, []);

  return (
    <div className="min-h-screen py-10">
      <h1 className="heading text-center">Recipes</h1>
      <div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Accent</span>
          </label>
          <input
            type="text"
            placeholder="username"
            class="input input-accent input-bordered"
          />
        </div>
      </div>

      {!recipeReducer.recipesLoading && recipeReducer.recipes && (
        <div className="grid grid-cols-3 gap-10 p-3">
          {recipeReducer.recipes.map(
            ({ id, imageUrl, name, totalCalories, userId, Category, User }) => {
              return (
                <RecipeCard
                  key={id}
                  id={id}
                  imageUrl={imageUrl}
                  name={name}
                  totalCalories={totalCalories}
                  userId={userId}
                  category={Category.name}
                  user={User.name}
                />
              );
            }
          )}
        </div>
      )}

      {recipeReducer.recipesLoading && (
        <div className="grid grid-cols-3 gap-10 p-3">
          <RecipeCardLoading />
          <RecipeCardLoading />
          <RecipeCardLoading />
          <RecipeCardLoading />
          <RecipeCardLoading />
          <RecipeCardLoading />
        </div>
      )}

      {recipeReducer.recipesError && <InternalServerError />}
    </div>
  );
};

export default RecipesPage;
