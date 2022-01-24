import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchRecipes } from "../store/actionCreators";
import RecipeCard from "../components/RecipeCard";
import RecipeCardLoading from "../components/RecipesCardLoading";

const RecipesPage = () => {
  const dispatch = useDispatch();
  const {
    recipes,
    recipesLoading: loading,
    recipesError: error,
  } = useSelector((store) => store);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, []);

  return (
    <div className="min-h-screen py-10">
      {/* {recipes && !loading && <h1>{JSON.stringify(recipes)}</h1>}
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error...</h1>} */}

      <h1 className="heading text-center">Recipes</h1>
      <div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="username"
            class="input input-accent input-bordered"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-10 p-3">
        <RecipeCardLoading />
        <RecipeCardLoading />
        <RecipeCardLoading />
        <RecipeCardLoading />
        <RecipeCardLoading />
        <RecipeCardLoading />
        <RecipeCardLoading />
        <RecipeCardLoading />
        <RecipeCardLoading />
      </div>

      <div className="btn-group flex justify-center mt-20 mb-10">
        <button className="btn">Previous</button>
        <button className="btn">1</button>
        <button className="btn btn-active">2</button>
        <button className="btn">3</button>
        <button className="btn">4</button>
        <button className="btn">Next</button>
      </div>
      <div></div>
    </div>
  );
};

export default RecipesPage;
