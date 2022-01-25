import RecipeCard from "../../components/RecipeCard"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from '../../store/actionCreators/recipesCreator'

const RecipeAdmin = () => {
    const dispatch = useDispatch();
    const { recipeReducer } = useSelector((store) => store);

    useEffect(() => {
        dispatch(fetchRecipes()); // LIMIT BY 3
    }, []);
    return (
        <>
        
        <div className="overflow-x-auto p-5">
            <div className="flex justify-between my-5">
                <h1 className="font-bold text-2xl">Recipe</h1>
                {/* <button class="btn btn-outline btn-primary" onClick={() => setShowModal(true)}>Add Ingredient</button> */}
            </div>
            <div className="grid grid-cols-3 gap-10 py-3">
                {recipeReducer.recipes.map(
                  ({ id, imageUrl, name, totalCalories, userId }) => {
                    return (
                      <RecipeCard
                        key={id}
                        id={id}
                        imageUrl={imageUrl}
                        name={name}
                        totalCalories={totalCalories}
                        userId={userId}
                      />
                    );
                  }
                )}
              </div>
        </div>
        </>
    )
}

export default RecipeAdmin