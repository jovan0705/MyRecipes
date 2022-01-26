import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import RecipeCard from "../components/RecipeCard";
import { fetchFavourites } from "../store/actionCreators/favouritesCreator";
import TopNavbar from "../components/TopNavbar";
import EmptyState from "../components/EmptyState";

const FavouritePage = () => {
  const { favouritesReducer } = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavourites());
  }, [favouritesReducer.favourites]);

  return (
    <div className="h-screen py-10">
      <TopNavbar />
      <h1 className="heading text-center">Favourite</h1>
      {favouritesReducer.favourites.hasOwnProperty("favoritedRecipes") &&
        favouritesReducer.favourites.favoritedRecipes.length === 0 && (
          <div className="w-full h-1/2">
            <EmptyState message="There's no favourite recipe yet" />
          </div>
        )}
      <div className="grid grid-cols-3 gap-10 p-3">
        {favouritesReducer.favourites.hasOwnProperty("favoritedRecipes") &&
          favouritesReducer.favourites.favoritedRecipes.length >= 1 &&
          favouritesReducer.favourites.favoritedRecipes.map(
            ({
              id,
              name,
              imageUrl,
              totalCalories,
              userId,
              Category,
              User,
              RecipeRatings,
            }) => {
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
                  rating={RecipeRatings}
                />
              );
            }
          )}
      </div>
    </div>
  );
};

export default FavouritePage;
