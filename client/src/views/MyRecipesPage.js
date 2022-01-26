// React Utility
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserRecipes } from "../store/actionCreators/userRecipesCreator";
import RecipeCard from "../components/RecipeCard";
import TopNavbar from "../components/TopNavbar";

const MyRecipesPage = () => {
  const dispatch = useDispatch();
  const { userRecipesReducer } = useSelector((store) => store);

  useEffect(() => {
    dispatch(fetchUserRecipes());
  }, []);
  return (
    <div className="py-10 h-screen">
      <TopNavbar />
      <h1 className="heading">My Recipes</h1>
      <div className="grid grid-cols-3 gap-10 p-3">
        {userRecipesReducer.userRecipes.hasOwnProperty("userCreatedRecipes") &&
          userRecipesReducer.userRecipes.userCreatedRecipes.map(
            ({
              id,
              imageUrl,
              name,
              totalCalories,
              User,
              Category,
              RecipeRatings,
            }) => {
              return (
                <RecipeCard
                  key={id}
                  id={id}
                  imageUrl={imageUrl}
                  name={name}
                  totalCalories={totalCalories}
                  user={User.name}
                  category={Category.name}
                  page="myrecipes"
                  rating={RecipeRatings}
                />
              );
            }
          )}
      </div>
    </div>
  );
};

export default MyRecipesPage;
