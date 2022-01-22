import { IoChevronForwardCircleSharp } from "react-icons/io5";
import CategoryCard from "../components/CategoryCard";
import CategoryCardLoading from "../components/CategoryCardLoading";
import Jumbotron from "../components/Jumbtoron";
import RecipeCard from "../components/RecipeCard";
import TopNavbar from "../components/TopNavbar";
import { Link } from "react-router-dom";
import RecipeCardLoading from "../components/RecipesCardLoading";

const HomePage = () => {
  return (
    <div>
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
        <div className="grid grid-cols-6 gap-10">
          <CategoryCardLoading />
          <CategoryCardLoading />
          <CategoryCardLoading />
          <CategoryCardLoading />
          <CategoryCardLoading />
          <CategoryCardLoading />
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
        <div className="grid grid-cols-3 gap-10 p-3">
          <RecipeCardLoading />
          <RecipeCardLoading />
          <RecipeCardLoading />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
