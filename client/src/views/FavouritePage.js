import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import RecipeCard from "../components/RecipeCard";
import { fetchFavourites } from "../store/actionCreators/favouritesCreator";
import TopNavbar from "../components/TopNavbar";

const FavouritePage = () => {
  const { favouritesReducer } = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavourites());
  }, []);

  return (
    <div className="h-screen py-10">
      <TopNavbar />
      <h1 className="heading">Favourite</h1>
      <div className="grid grid-cols-3 gap-10 p-3">
        {favouritesReducer.favourites.hasOwnProperty("favoritedRecipes") &&
          favouritesReducer.favourites.favoritedRecipes.map(
            ({ id, name, imageUrl, totalCalories, userId, Category, User }) => {
              return (
                <RecipeCard
                  key={id}
                  id={id}
                  name={name}
                  imageUrl={imageUrl}
                  totalCalories={totalCalories}
                  userId={userId}
                  category={Category.name}
                  user={User.name}
                />
              );
            }
          )}
      </div>
    </div>
  );
};

export default FavouritePage;
