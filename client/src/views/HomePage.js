// Icon
import { IoChevronForwardCircleSharp } from "react-icons/io5";

// Components
import CategoryCard from "../components/CategoryCard";
import CategoryCardLoading from "../components/CategoryCardLoading";
import Jumbotron from "../components/Jumbtoron";
import RecipeCard from "../components/RecipeCard";
import TopNavbar from "../components/TopNavbar";
import RecipeCardLoading from "../components/RecipesCardLoading";
import InternalServerError from "../components/InternalServerError";

// React Utilites
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Store
import {
  fetchRecipes,
  setFilter,
} from "../store/actionCreators/recipesCreator";
import { fetchCategories } from "../store/actionCreators/categoriesCreator";

const HomePage = () => {
  const dispatch = useDispatch();
  const { recipeReducer, categoryReducer } = useSelector((store) => store);
  useEffect(() => {
    dispatch(setFilter(""));
  }, []);

  useEffect(() => {
    dispatch(fetchRecipes(recipeReducer.filter)); // LIMIT BY 3
    dispatch(fetchCategories()); // LIMIT BY 6
  }, []);

  return (
    <div className="py-10">
      <TopNavbar />
      <div className="mb-20">
        <Jumbotron />
      </div>
      <div className="mb-20">
        <div className="flex justify-between">
          <div className="heading">Recipe Categories</div>
          <div className="flex hover:scale-110 duration-200 cursor-pointer">
            <div className="mr-4 text-primary font-bold text-2xl">View All</div>
            <div className="text-primary text-3xl">
              <IoChevronForwardCircleSharp />
            </div>
          </div>
        </div>
        <div>
          {categoryReducer.categoriesLoading && (
            <div className="grid grid-cols-6 gap-10">
              <CategoryCardLoading />
              <CategoryCardLoading />
              <CategoryCardLoading />
              <CategoryCardLoading />
              <CategoryCardLoading />
              <CategoryCardLoading />
            </div>
          )}
          {categoryReducer.categories &&
            !categoryReducer.categoriesLoading &&
            !categoryReducer.categoriesError && (
              <div className="grid grid-cols-6 gap-10">
                {categoryReducer.categories
                  .slice(0, 6)
                  .map(({ id, imageUrl, name }) => {
                    return (
                      <CategoryCard
                        key={id}
                        id={id}
                        imageUrl={imageUrl}
                        name={name}
                      />
                    );
                  })}
              </div>
            )}
          {categoryReducer.categoriesError && <InternalServerError />}
        </div>
      </div>
      <div className="my-10 p-2">
        <div className="flex justify-between">
          <div className="heading">Recipes</div>
          <div className="flex hover:scale-110 duration-200 cursor-pointer">
            <Link to="/recipes">
              <div className="flex hover:scale-110 duration-200 cursor-pointer">
                <div className="mr-4 text-primary font-bold text-2xl">
                  View All
                </div>
                <div className="text-primary text-3xl">
                  <IoChevronForwardCircleSharp />
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div>
          {recipeReducer.recipesLoading && (
            <div className="grid grid-cols-3 gap-10 p-3">
              <RecipeCardLoading />
              <RecipeCardLoading />
              <RecipeCardLoading />
            </div>
          )}
        </div>
        <div>
          {recipeReducer.recipes &&
            !recipeReducer.recipesLoading &&
            !recipeReducer.recipesError && (
              <div className="grid grid-cols-3 gap-10 p-3">
                {recipeReducer.recipes
                  .slice(0, 3)
                  .map(
                    ({
                      id,
                      imageUrl,
                      name,
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
                          imageUrl={imageUrl}
                          name={name}
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
            )}
        </div>
        {recipeReducer.recipesError && <InternalServerError />}
      </div>
    </div>
  );
};

export default HomePage;
